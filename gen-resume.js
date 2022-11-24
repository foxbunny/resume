let fs = require('fs')
let path = require('path')

let
  EXPERIENCES = [
    {
      company: 'Coin Metrics',
      url: 'https://coinmetrics.io/',
      start: '2020-01',
      end: '2022-11',
      position: 'Lead front-end engineer',
      skills: [
        'Front-end',
        'Web accessibility',
        'Server-side rendering',
        'CI/CD',
        'Team leadership',
        'Mentorship',
        'Unit testing',
      ],
      stack: [
        'NodeJS',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'Vanilla JavaScript',
        'NodeJS',
        'React.js',
        'Jest',
        'MobX',
        'Webpack',
        'Plotly.js',
        'SVG sprites',
        'NV access NVDA',
        'Docker',
      ],
      highlights: [
        'Implemented the key front end products',
        'Formed and managed the front end team',
        'Defined best practices for the team',
        'Mentored junior developers',
        'Defined the processes for better project and workflow visibility',
        'Started work on implementing web accessibility practices and code',
        'Built a lightweight e2e testing framework for Vanilla JS projects',
      ],
    },
    {
      company: 'CUBE Team',
      position: 'Lead front-end engineer',
      url: 'https://cubeteam.com/',
      start: '2017-04',
      end: '2019-11',
      skills: [
        'Front-end',
        'Back-end',
        'CI/CD',
        'DevOps',
        'Team leadership',
        'Mentorship',
        'Unit testing',
      ],
      stack: [
        'JavaScript',
        'TypeScript',
        'Python',
        'HTML',
        'CSS',
        'SCSS',
        'VueJS',
        'Jest',
        'Django',
        'Webpack',
        'PostgreSQL',
        'Icon fonts',
        'Linux',
      ],
      highlights: [
        'Implemented the key frontend products',
        'Formed and managed the front end team',
        'Defined best practices for the team',
        'Mentored junior developers',
        'Introduced a kanban-style JIT workflow',
        'Shared design and maintenance of the backend systems with data team',
      ],
    },
    {
      company: 'Holiday Pirates',
      position: 'Senior front-end engineer',
      url: 'https://www.holidaypirates.com/',
      start: '2016-10',
      end: '2017-03',
      skills: [
        'Front-end',
        'Functional programming',
        'Mentorship',
        'Unit testing',
      ],
      stack: [
        'JavaScript',
        'HTML',
        'CSS',
        'SCSS',
        'React.js',
        'Redux',
        'Jest',
        'RamdaJS',
        'Icon fonts',
      ],
      highlights: [
        'Designed and implemented a search engine product prototype',
        'Worked on experimental features in collab with devops',
        'Mentored junior developers',
      ],
    },
    {
      company: 'Othernet',
      position: 'Lead software engineer',
      url: 'https://othernet.is/',
      start: '2014-02',
      end: '2016-09',
      skills: [
        'Front-end',
        'Back-end',
        'Server-side rendering',
        'Embedded Linux firmware',
        'Build automation',
        'UX design',
        'DevOps',
        'Team leadership',
        'Mentorship',
        'Unit testing',
      ],
      stack: [
        'JavaScript',
        'CoffeeScript',
        'Python',
        'HTML',
        'CSS',
        'SCSS',
        'Vanilla JavaScript',
        'NodeJS',
        'Bottle.py',
        'Pytest',
        'PostgreSQL',
        'SQLite',
        'Linux',
        'Buildroot',
        'GNU Make',
      ],
      highlights: [
        'Designed and implemented the company website',
        'Built a web-based progressively-enhanced file manager for the receiver unit',
        'Built the operating system with OTA updates for the receiver unit',
        'Formed and managed a team of software engineers',
        'Mentored Junior developers',
        'Worked on the open-source libraries released by the company',
      ],
    },
    {
      company: 'Cloud Horizon',
      position: 'Front-end developer',
      url: 'https://cloudhorizon.com/',
      start: '2013-09',
      end: '2014-01',
      skills: [
        'Hybrid mobile applications',
        'Front-end',
        'Mentorship',
      ],
      stack: [
        'JavaScript',
        'CoffeeScript',
        'HTML',
        'CSS',
        'SCSS',
        'jQuery',
        'Vanilla JavaScript',
        'BackboneJS',
        'RequireJS',
        'Apache Cordova',
        'SOAP',
        'Google Maps API',
        'Linux',
      ],
      highlights: [
        'Completed two hybrid mobile apps',
        'Assisted with features on other projects',
        'Implemented the company website',
        'Developed an in-house framework on top of BackboneJS',
        'Implemented an infinite swipe interface that LinkedIn could not 💪',
      ],
    },
    {
      company: 'Monwara',
      position: 'Full-stack developer',
      url: 'https://github.com/Monwara/',
      start: '2011-10',
      end: '2013-05',
      skills: [
        'Front-end',
        'Back-end',
        'Server-side rendering',
        'UX design',
        'DevOps',
        'Unit testing',
      ],
      stack: [
        'JavaScript',
        'Python',
        'HTML',
        'CSS',
        'SCSS',
        'jQuery',
        'jQuery UI',
        'NodeJS',
        'Django',
        'Pytest',
        'Google AppEngine',
        'RequireJS',
        'PostgreSQL',
        'SQLite',
        'Linux',
      ],
      highlights: [
        'Created and maintained the company webpage',
        'Created and maintained the bus ride sharing platform',
        'Worked on the open-source libraries released by the company',
      ],
    },
    {
      company: 'Freelance',
      position: 'Web designer-developer',
      url: 'https://github.com/foxbunny/',
      start: '2006-01',
      end: '2011-09',
      skills: [
        'Front-end',
        'Back-end',
        'Server-side rendering',
        'UX design',
        'DevOps',
      ],
      stack: [
        'JavaScript',
        'Python',
        'HTML',
        'CSS',
        'SCSS',
        'jQuery',
        'Django',
        'web.py',
        'PostgreSQL',
        'Linux',
      ],
      highlights: [
        'Created and maintained simple websites',
        'Created custom CMS implementations',
        'Created web applications with REST API integration',
        'Contributed to open-source projects',
        'Automated graphic design tools',
        'Performed analysis of design workloads',
      ],
    },
  ],
  THIS_YEAR = new Date().getFullYear()

let
  yearMonthToYear = yearMonth => {
    let [year, month] = yearMonth.split('-').map(Number)
    return year + (month - 1) / 12
  },
  getIsoCurrentYearMonth = () => new Date().toISOString().split('-').slice(0, 2).join('-'),
  getDuration = (start, end = getIsoCurrentYearMonth()) => yearMonthToYear(end) - yearMonthToYear(start),
  pluralizeSuffix = (singular, plural, n) => n + ' ' + (n > 1 ? plural : singular),
  formatDuration = duration => {
    let years = Math.floor(duration)
    let months = Math.round(12 * (duration * 100 - years * 100) / 100) + 1
    s = pluralizeSuffix('month', 'months', months)
    if (years) s = pluralizeSuffix('year', 'years', years) + ' ' + s
    return s
  },
  formatMonth = yearMonth => new Date(yearMonth).toLocaleDateString('en', { year: 'numeric', month: 'long' }),
  formatLastUsedYear = year => {
    if (!year) return 'never'
    let diff = THIS_YEAR - year
    if (!diff) return 'this year'
    if (diff < 2) return 'a year ago'
    return `${diff} years ago`
  },
  createSkillExperienceCollector = () => {
    let exp = {}
    let maxExp = 0

    return {
      add(skillName, duration, lastYear) {
        let e = exp[skillName] ??= {
          experience: 0,
          lastUsed: 0,
          get expPct() {
            return this.experience / maxExp * 100
          },
          get skillFade() {
            let x = (8 - (THIS_YEAR - this.lastUsed)) / 8
            return Math.max(0.3, 1 - Math.pow(1 - x, 2)) // ease out
          }
        }
        maxExp = Math.max(maxExp, e.experience += duration)
        e.lastUsed = Math.max(e.lastUsed, lastYear)
      },
      entries() {
        return Object.entries(exp).sort((a, b) => b[1].experience - a[1].experience)
      }
    }
  }

let
  renderExperience = (x, index) => {
    let duration = getDuration(x.start, x.end)
    return `
      <li data-duration="${duration.toFixed(2)}">
        <h4>
          <a href="${x.url}">${x.company}</a>
          <span>${x.position}</span>
        </h4>
        
        <div>
          <span>${formatDuration(duration)}</span>
          from <time datetime="${x.start}">${formatMonth(x.start)}</time> 
          to <time datetime="${x.end}">${formatMonth(x.end)}</time>
        </div>
        
        <div class="experience-details">
          <section aria-labelledby="technologies-heading-${index}">
            <h5 id="technologies-heading-${index}">Skills</h5>
            <ul>
              ${x.skills?.map(x => `<li>${x}</li>`).join('\n') ?? ''}
            </ul>
          </section>
          
          <section aria-labelledby="stack-heading-${index}">
            <h5 id="stack-heading-${index}">Tech</h5>
            <ul>
              ${x.stack?.map(x => `<li>${x}</li>`).join('\n') ?? ''}
            </ul>
          </section>
        </div>
          
        <section aria-labelledby="highlights-heading-${index}">
          <h5 id="highlights-heading-${index}">Highlights</h5>
          <ul>
            ${x.highlights?.map(x => `<li>${x}</li>`).join('\n') ?? ''}
          </ul>
        </section>
      </li>
    `
  },
  renderSkill = ([name, { lastUsed, experience, expPct, skillFade }]) => {
    return `
      <tr style="--rsm-skill-fade: ${skillFade}">
        <th scope="row">${name}</th>
        <td><span class="experience-years">${experience.toFixed(1)}</span> <span class="experience-graph" style="--rsm-exp-pct: ${expPct}%"></span></td>
        <td><time datetime="${lastUsed}">${formatLastUsedYear(lastUsed)}</time></td>
      </tr>
    `
  },
  renderModeButtons = () => `
    <rsm-table-view-modes hidden>
      <button role="switch" value="chart" aria-checked="false">
        <svg><use xlink:href="#bar-chart"></use></svg>
        <span>Display years as graphs</span>
      </button>
      <button role="switch" value="fade" aria-checked="false">
        <svg><use xlink:href="#fade"></use></svg>
        <span>Fade unused skills</span>
      </button>
    </rsm-table-view-modes>
  `,
  renderResume = () => {
    let skillExperience = createSkillExperienceCollector()
    let techExperience = createSkillExperienceCollector()

    for (let x of EXPERIENCES) {
      let endYear = Number(x.end.split('-')[0])
      let duration = getDuration(x.start, x.end)
      for (let s of x.skills) skillExperience.add(s, duration, endYear)
      for (let s of x.stack) techExperience.add(s, duration, endYear)
    }

    return `
      <!doctype html>

      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Hajime Yamasaki Vukelić - professional resume</title>
          <meta name="description" content="Hajime Yamsaki Vukelic's professional history, skill overview, and contact information">
          <style>${fs.readFileSync(path.resolve(__dirname, 'index.css'))}</style>
        </head>
        <body>
          <!--
          Thank you for taking the time to review the source code of this resume.

          Although it may sound silly for a resume, I have cut no corners. This is the
          best code I can write given the requirements listed further below, and this is
          how I write actual applications in real-life (except for the changes made
          specifically here to keep the page self-contained, noted below). Contrary to
          common belief, this way of writing applications has given me the most
          flexibility and performance relative to the more prevalent approaches, and I 
          can complete applications of much bigger scope, much faster this way. This is
          therefore also a scalable approach. If you're curious, I could talk about it 
          all day... for free. \(^o^)/

          Requirements:

          - Completely self-contained.
          - Load in the browser without any special tools.
          - Work regardless of what the browser supports: with or without CSS, with 
            or without JavaScript, etc.
          - Aaccessible to screen readers.
          - Printable.
          - Interactive, offer different pre-analyzed views of the information.

          Notes:

          - A simple NodeJS script generates all of the HTMl to avoid repetition.
          - Images, CSS and JavaScript are all embedded. There are no links to external
            resources so the page can work offline or in environments where network
            connectivity is restricted. Normally these would all be external and either
            linked to from the CSS file or in the HEAD tag with appropriate media (CSS)
            and defer (JS) attributes.
          - Progressively enhanced.
          - The HTML was coded first without any consideration for appearance, then read
            by the screen reader, and then the CSS and JavaScript were applied after the
            fact.
          - The stylesheet is divided into distinct sections for screen and print media.
            This would normally be achieved using two CSS files, where both would have a
            media attribute on the LINK tags, but this page needed to be self-contained
            for convenience, so we use media queries instead.
          - Support for older browsers is not taken into account.
          - Support for Safari-based browser is not specifically tested, though it should
            work.
          - Only semantic classes used, preferably select ID or naked elements where 
            possible.
          - Using dummy id selector with triple-dash prefix to name declaration blocks

          -->
        
          <h1>Hajime Yamasaki Vukelić <span>professional resume</span></h1>

          <nav aria-labelledby="nav-heading">
            <h2 id="nav-heading">Resume contents</h2>

            <ul>
              <li><a href="#" aria-label="Page top">#</a></li>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#more">More</a></li>
              <li><a href="#contact">Contact</a></li>
              <li hidden>
                <button id="dark-mode-toggle" role="switch" aria-checked="false">
                  <svg><use href="#moon"></use></svg>
                  <svg><use href="#sun"></use></svg>
                  <span>Toggle light and dark theme</span>
                </button>
              </li>
            </ul>
          </nav>

          <main>
            <section id="overview" aria-labelledby="overview-heading">
               <h2 id="overview-heading">Overview</h2>
               
               <p>
               Hajime is an all-rounder web software engineer. He has accumulated over 
               a decade of diverse knowledge and techniques from various domains, 
               ranging from the web development foundations from before it was cool, 
               to hybrid mobile application development, to back-end and IoT 
               applications.
               </p>
               
               <p>
               When leading teams, Hajime seeks to establish a fair, trust-first,
               share-everything environment, where psychological safety of the team
               members takes precedence over everything else. Experience has shown
               that this approach boosts the team performance compared to other
               approaches that are more commonly in practice.
               </p>
               
               <p>
               For the past several years, Hajime's main focus has been on simplicity
               and efficiency, both in technical terms as well as in terms of workflows
               and processes for successful teamwork.
               </p>
             </section>

            <section id="experience" aria-labelledby="experience-heading">
              <h2 id="experience-heading">Professional experience</h2>
              
              <div class="h3">
                <h3>Skill summary</h3>
                ${renderModeButtons()}
              </div>
              
              <rsm-summary-table>
                <table id="skill-list">
                  <thead>
                    <th scope="col">Skill</th>
                    <th scope="col" data-sortable="numeric">Years</th>
                    <th scope="col" data-sortable="time">Last used</th>
                  </thead>
                  <tbody>
                    ${skillExperience.entries().map(renderSkill).join('\n')}
                  </tbody>
                </table>
                <button hidden>Show more skills...</button>
              </rsm-summary-table>
              
              <div class="h3">
                <h3>Tech summary</h3>
                ${renderModeButtons()}
              </div>
              
              <rsm-summary-table>
                <table id="tech-list">
                  <thead>
                    <th scope="col">Tech</th>
                    <th scope="col" data-sortable="numeric">Years</th>
                    <th scope="col" data-sortable="time">Last used</th>
                  </thead>
                  <tbody>
                    ${techExperience.entries().map(renderSkill).join('\n')}
                  </tbody>
                </table>
                <button hidden>Show more tech...</button>
              </rsm-summary-table>
              
              <h3>Details</h3>
              
              <ul id="experience-details">
              ${EXPERIENCES.map(renderExperience).join('\n')}
              </ul>
            </section>
            
            <section id="more" aria-labelledby="more-heading">
              <h2 id="more-heading">More about Hajime</h2>
              
              <h3>Writing</h3>
              
              <p>
              Hajime writes about technology, his professional experiences, and work 
              ethics. You can find Hajime's writings 
              <a href="https://medium.com/@hayavuk">on Medium</a>.
              </p>
              
              <h3>Open-source</h3>
              
              <p>
              Hajime started his professional career as a full-time programmer after successfully
              contributing to the <a href="http://www.web2py.com/">web2py</a> framework.
              He also contributed to the success of the <a href="https://wiki.archlinux.org/">Arch Wiki</a> 
              project&mdash;widely considered to be one of the best technical documentation 
              projects in existence&mdash;by creating the initial versions of its taxonomy
              and content organization. He has also created several 
              <a href="https://github.com/foxbunny/">open-source libraries</a>
              and published them <a href="https://www.npmjs.com/~foxbunny">on NPM</a>.
              </p>
              
              <h3>Photography</h3>
              
              <p>
              Hajime has been an amateur photographer since late 1990s. He particularly
              enjoys <a href="https://yamasakivukelic.com/galleries.html" title="Hajime's photo galleries">macro, street and travel photography</a>.
              </p>
            </section>
                                                               
            <section id="contact" aria-labelledby="contact-heading">
              <h2 id="contact-heading">Contact information</h2>
              
              <p>Email: <a href="mailto:hajime@devi.us">hajime@devi.us</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/hajime-yamasaki-vukelic/">linkedin.com/in/hajime-yamasaki-vukelic/</a></p>
            </section>
            
            <div id="sprite-container">
              <svg>
                <symbol id="bar-chart" viewBox="0 0 32 32">
                  <path d="M4,5l0,-3l-1,0l0,28l1,0l0,-3l20,0l0,-4l-20,0l0,-2l17,0l0,-4l-17,0l0,-2l22,0l0,-4l-22,0l0,-2l25,0l0,-4l-25,0Z"  fill="currentColor"/>
                </symbol>
                <symbol id="fade" viewBox="0 0 32 32">
                  <rect x="3" y="5" width="26" height="4" fill="currentColor"/>
                  <rect x="3" y="11" width="26" height="4" style="fill-opacity:0.5;" fill="currentColor"/>
                  <rect x="3" y="17" width="26" height="4" style="fill-opacity:0.25;" fill="currentColor"/>
                  <rect x="3" y="23" width="26" height="4" style="fill-opacity:0.1;" fill="currentColor"/>
                </symbol>
                <symbol id="moon" viewBox="0 0 32 32">
                  <path d="M14.753,3.558c6.236,0.716 11.086,6.02 11.086,12.447c-0,6.915 -5.615,12.53 -12.53,12.53c-2.705,-0 -5.211,-0.86 -7.261,-2.32c0.474,0.054 0.956,0.082 1.444,0.082c6.915,0 12.529,-5.614 12.529,-12.53c0,-4.21 -2.08,-7.938 -5.268,-10.209Z" fill="currentColor"/>
                </symbol>
                <symbol id="sun" viewBox="0 0 32 32">
                  <path d="M18,27.779c0,-0.417 -0.339,-0.756 -0.756,-0.756l-2.488,0c-0.417,0 -0.756,0.339 -0.756,0.756l0,1.511c0,0.417 0.339,0.756 0.756,0.756l2.488,0c0.417,0 0.756,-0.339 0.756,-0.756l0,-1.511Zm5.959,-0.957c0.295,0.295 0.774,0.295 1.069,-0l1.759,-1.76c0.295,-0.295 0.295,-0.773 0,-1.068l-1.068,-1.069c-0.295,-0.295 -0.774,-0.295 -1.069,-0l-1.76,1.759c-0.295,0.295 -0.295,0.774 0,1.069l1.069,1.069Zm-14.849,-1.069c0.295,-0.295 0.295,-0.774 -0,-1.069l-1.76,-1.759c-0.295,-0.295 -0.774,-0.295 -1.069,-0l-1.068,1.069c-0.295,0.295 -0.295,0.773 -0,1.068l1.759,1.76c0.295,0.295 0.774,0.295 1.069,-0l1.069,-1.069Zm6.89,-18.73c4.967,0 9,4.033 9,9c0,4.967 -4.033,9 -9,9c-4.967,0 -9,-4.033 -9,-9c0,-4.967 4.033,-9 9,-9Zm0,2c3.863,0 7,3.137 7,7c-0,3.863 -3.137,7 -7,7c-3.863,0 -7,-3.137 -7,-7c0,-3.863 3.137,-7 7,-7Zm13.256,9.012c0.417,-0 0.756,-0.339 0.756,-0.756l-0,-2.489c-0,-0.417 -0.339,-0.755 -0.756,-0.755l-1.512,-0c-0.417,-0 -0.756,0.338 -0.756,0.755l0,2.489c0,0.417 0.339,0.756 0.756,0.756l1.512,-0Zm-25,-0c0.417,-0 0.756,-0.339 0.756,-0.756l-0,-2.489c-0,-0.417 -0.339,-0.755 -0.756,-0.755l-1.512,-0c-0.417,-0 -0.756,0.338 -0.756,0.755l0,2.489c0,0.417 0.339,0.756 0.756,0.756l1.512,-0Zm2.025,-8.891c0.295,0.295 0.774,0.295 1.069,0l1.76,-1.759c0.295,-0.295 0.295,-0.774 -0,-1.069l-1.069,-1.069c-0.295,-0.295 -0.774,-0.295 -1.069,0l-1.759,1.76c-0.295,0.295 -0.295,0.774 -0,1.069l1.068,1.068Zm20.506,-1.068c0.295,-0.295 0.295,-0.774 0,-1.069l-1.759,-1.76c-0.295,-0.295 -0.774,-0.295 -1.069,0l-1.069,1.069c-0.295,0.295 -0.295,0.774 0,1.069l1.76,1.759c0.295,0.295 0.774,0.295 1.069,0l1.068,-1.068Zm-8.787,-5.297c0,-0.417 -0.339,-0.756 -0.756,-0.756l-2.488,0c-0.417,0 -0.756,0.339 -0.756,0.756l0,1.511c0,0.417 0.339,0.756 0.756,0.756l2.488,0c0.417,0 0.756,-0.339 0.756,-0.756l0,-1.511Z" fill="currentColor"/>
                </symbol>
              </svg>
            </div>
            
            <script>${fs.readFileSync(path.resolve(__dirname, 'index.js'))}</script>
          </main>
        </body>
      </html>
    `
  }

fs.writeFileSync('index.html', renderResume(), { encoding: 'utf-8' })
