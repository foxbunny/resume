{
  'use strict'

  let
    TRUE_FALSE_SWITCH = { true: 'false', false: 'true' }

  customElements.define('rsm-summary-table', class extends HTMLElement {
    connectedCallback() {
      let
        hiddenRowCount = 0

      let
        $btn = this.querySelector('button'),
        $table = this.querySelector('table'),
        $tbody = $table.lastElementChild,
        $$rows = Array.from($tbody.children)

      let
        cropTable = () => $$rows.forEach(($, idx) =>
          hiddenRowCount += ($.hidden = idx > 4),
        ),
        uncropTable = () => $table.querySelectorAll('tbody tr[hidden]').forEach($ => $.hidden = false),
        activateCropToggle = () => Object.assign($btn, {
          textContent: $btn.textContent.replace('Show', 'Show ' + hiddenRowCount),
          hidden: false,
        }),
        deactivateCropToggle = () => $btn.hidden = true,
        markSortedColumn = colNo => $table.querySelector(`thead th:nth-child(${colNo})`).classList.add('sorted'),
        unmarkCurrentlySortedColumn = () => $table.querySelector('th.sorted')?.classList.remove('sorted'),
        columnDataGetters = {
          numeric: $ => Number($.textContent),
          time: $ => new Date($.firstElementChild.dateTime).getTime(),
        },
        updateLabel = (controlId, isChecked) =>
          this.parentElement.querySelector(`label[for=${controlId}]`)?.classList.toggle('active', isChecked)

      let
        onToggleCrop = () => {
          uncropTable()
          deactivateCropToggle()
        },
        onSortTable = (colNum, colType) => {
          unmarkCurrentlySortedColumn()
          markSortedColumn(colNum)
          let getColumnData = columnDataGetters[colType]
          $$rows
            .sort(($a, $b) => {
              let
                a = getColumnData($a.querySelector(`:scope > :nth-child(${colNum})`)),
                b = getColumnData($b.querySelector(`:scope > :nth-child(${colNum})`))
              return b - a
            })
            .forEach($ => $tbody.append($))
          if (!$btn.hidden) cropTable()
        },
        onToggleViewModes = updateLabel,
        onInit = () => {
          cropTable()
          activateCropToggle()
          markSortedColumn(2)
        }

      $btn.onclick = onToggleCrop
      $table.querySelector('thead').onclick = ev => {
        let
          $th = ev.target.closest('[data-sortable]'),
          colNum = 1
        if (!$th || $th.classList.contains('sorted')) return
        for (let $ = $th; $ = $.previousElementSibling; colNum++) {}
        onSortTable(colNum, $th.dataset.sortable)
      }
      this.onchange = ev => {
        if (!ev.target.matches('input[type="checkbox"]')) return
        onToggleViewModes(ev.target.id, ev.target.checked)
      }
      onInit()
    }
  })

  customElements.define('rsm-table-view-modes', class extends HTMLElement {
    connectedCallback() {
      let $relatedTable = this.closest('.h3').nextElementSibling

      this.onclick = ev => {
        let $btn = ev.target.closest('rsm-table-view-modes button[value]')
        if (!$btn) return
        let
          attr = $btn.value,
          nextState = $btn.ariaChecked = TRUE_FALSE_SWITCH[$btn.ariaChecked]
        $relatedTable.toggleAttribute(attr, nextState === 'true')
      }
      this.hidden = false
    }
  })
}
