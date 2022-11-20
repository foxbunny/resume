let EXPERIENCES = [
  {
    company: 'Coin Metrics',
    url: 'https://coinmetrics.io',
    start: '2020-01',
    end: '2022-11',
    position: 'Team lead, front-end',
    technologies: [
      'Front-end',
      'Web accessibility',
      'Server-side rendering',
      'CI/CD',
    ],
    stack: [
      'NodeJS',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS',
      'Vanilla JavaScript',
      'React.js',
      'MobX',
      'Webpack',
      'Plotly.js',
      'SVG sprites',
      'NV access NVDA',
    ],
    highlights: [
      'Implemented the key front end products',
      'Formed and managed the front end team',
      'Defined best practices for the team',
      'Mentored junior developers',
      'Defined the processes for better project and workflow visibility',
      'Started work on implementing web accessibility practices and code',
    ],
  },
  {
    company: 'CUBE Team',
    position: 'Lead front-end software engineer',
    url: 'https://cubeteam.com',
    start: '2017-04',
    end: '2019-11',
    technologies: [
      'Front-end',
      'Rest API',
      'CI/CD',
    ],
    stack: [
      'JavaScript',
      'TypeScript',
      'Python',
      'HTML5',
      'CSS',
      'VueJS',
      'Django',
      'Webpack',
      'PostgreSQL',
      'Icon fonts',
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
    position: 'Front-end software engineer',
    url: 'https://www.holidaypirates.com/',
    start: '2016-10',
    end: '2017-03',
    technologies: [
      'Front-end',
      'Functional programming',
    ],
    stack: [
      'JavaScript',
      'HTML5',
      'CSS',
      'React.js',
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
    technologies: [
      'Front-end',
      'Back-end',
      'Embedded Linux firmware',
      'Build automation',
      'UX design',
    ],
    stack: [
      'JavaScript',
      'CoffeeScript',
      'Python',
      'HTML4',
      'CSS',
      'jQuery',
      'Bottle.py',
      'PostgreSQL',
      'SQLite',
      'Linux',
      'Buildroot',
      'GNU Make',
    ],
    highlights: [
      'Designed and maintained company homepage',
      'Built and maintained a web-based progressively-enhanced file manager for the receiver unit',
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
    technologies: [
      'Hybrid mobile applications',
      'Front-end',
    ],
    stack: [
      'JavaScript',
      'CoffeeScript',
      'HTML4',
      'CSS',
      'jQuery',
      'BackboneJS',
      'RequireJS',
      'Apache Cordova',
      'SOAP',
      'Google Maps API',
    ],
    highlights: [
      'Completed two hybrid mobile apps',
      'Assisted with features on other projects',
      'Presented OTP authentication flow to the backend team',
      'Implemented a infinite swipe design that LinkedIn could not 💪',
    ],
  },
  {
    company: 'Monwara',
    position: 'Full-stack web developer',
    url: 'https://github.com/Monwara',
    start: '2011-10',
    end: '2013-05',
    technologies: [
      'Front-end',
      'Back-end',
      'UX design',
    ],
    stack: [
      'JavaScript',
      'Python',
      'HTML4',
      'CSS',
      'jQuery',
      'jQuery UI',
      'NodeJS',
      'Django',
      'Google AppEngine',
      'RequireJS',
      'PostgreSQL',
      'SQLite',
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
    url: 'http://github.com/hayavuk',
    start: '2006-01',
    end: '2011-09',
    technologies: [
      'Front-end',
      'Back-end',
      'UX design',
    ],
    stack: [
      ''
    ],
  },
]

let yearMonthToYear = yearMonth => {
  let [year, month] = yearMonth.split('-').map(Number)
  return year + (month - 1) / 12
}
let getIsoCurrentYearMonth = () => new Date().toISOString().split('-').slice(0, 2).join('-')
let getDuration = (start, end = getIsoCurrentYearMonth()) => yearMonthToYear(end) - yearMonthToYear(start)
let pluralizeSuffix = (singular, plural, n) => n + ' ' + (n > 1 ? plural : singular)
let formatDuration = duration => {
  let years = Math.floor(duration)
  let months = Math.round(12 * (duration * 100 - years * 100) / 100) + 1
  s = pluralizeSuffix('month', 'months', months)
  if (years) s = pluralizeSuffix('year', 'years', years) + ' ' + s
  return s
}

let renderExperience = (x, index) => {
  let duration = getDuration(x.start, x.end)
  return `
  <li data-duration="duration">
    <h3>
      <a href="${x.url}">${x.company}</a>, ${x.position}
    </h3>
    
    <span>${formatDuration(duration)} from <time datetime="${x.start}">${x.start}</time> to <time datetime="${x.end}">${x.end}</time></span>
    
    <section aria-labelledby="technologies-heading-${index}">
      <h4 id="technologies-heading-${index}">Tech overview</h4>
      <ul>
        ${x.technologies?.map(x => `<li>${x}</li>`).join('\n') ?? ''}
      </ul>
    </section>
    
    <section aria-labelledby="stack-heading-${index}">
      <h4 id="stack-heading-${index}">Tech stack</h4>
      <ul>
        ${x.stack?.map(x => `<li>${x}</li>`).join('\n') ?? ''}
      </ul>
    </section>
    
    <section aria-labelledby="highlights-heading-${index}">
      <h4 id="highlights-heading-${index}">Highlights</h4>
      <ul>
        ${x.highlights?.map(x => `<li>${x}</li>`).join('\n') ?? ''}
      </ul>
    </section>
  </li>
  `
}

let renderResume = () => `
<!doctype html>

<!--
Thank you for taking the time to review the source code of this résumé.

Although it may sound silly for a résumé, I have cut no corners. This is the
best code I can write given the requirements listed further below, and this is
how I write actual applications in real-life (except for the changes made
specifically here to keep the page self-contained, noted below). Contrary to
common belief, this way of writing applications has given me the most
flexibility and performance relative to the more prevalent approaches, and I 
can complete applications of much bigger scope, much faster this way. This 
therefore also a scalable approach. If you're curious, I could talk about it 
all day. :)

Here's some notes I jotted down while creating this page.

Requirements:

- I want the résumé to be completely self-contained.
- I want the page to load in the browser without any special tools.
- I want the résumé to work regardless of what the browser supports: with or
  without CSS, with or without JavaScript, etc.
- I want the résumé to be accessible to screen readers.
- I want the résumé to be printable.
- I want the résumé to be interactive so that it can offer different
  pre-analyzed views of the information.

Notes:

- A simple NodeJS script generates all of the HTMl to avoid repetition.
- Images, CSS and JavaScript are all embedded. There are no links to external
  resources so the page can work offline or in environments where network
  connectivity is restricted. Normally these would all be external and either
  linked to from the CSS file or in the HEAD tag with appropriate media (CSS)
  and defer (JS) attributes.
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
- Portions of the page are generated statically using the scripts.

-->

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hajime Yamasaki Vukelić - Profesisonal Résumé</title>
    <style>
      @media screen {
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      }
      
      h1,h2,h3,h4,h5,h6 {
        font-size: 100%;
        font-weight: inherit;
      }

      @media print {
        nav {
          display: none;
        }
      }
    </style>
  </head>
  <body>
    <h1>Hajime Yamasaki Vukelić - Professional Résumé</h1>

    <nav aria-labelledby="nav-heading">
      <h2 id="nav-heading">Résumé contents</h2>

      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#experience">Professional experience</a></li>
        <li><a href="#more">More about Hajime</a></li>
      </ul>
    </nav>

    <section id="overview" aria-labelledby="overview-heading">
      <h2 id="overview-heading">Overview</h2>

      <p>
        Hajime is a all-rounder front end developer with technical leadership
        experience. He has deep knowledge of everything that goes into creating
        user-facing application interfaces, from the foundational web
        technologies to UX design, to development workflows, to introducing
        the technology to new developers.
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

      <ul>
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
      Hajime started his professional career as a programmer after successfully
      contributing to the <a href="http://www.web2py.com/">web2py</a> framework.
      He also contributed to the success of the <a href="https://wiki.archlinux.org/">Arch Wiki</a> 
      project&mdash;widely considered to be one of the best technical documentation 
      projects in existence&mdash;by creating the initial versions of its taxonomy
      content organization. He has also created several <a href="https://github.com/foxbunny/">open-source libraries</a>
      and published them <a href="https://www.npmjs.com/~foxbunny">on NPM</a>.
      </p>
      
      <h3>Photography</h3>
      
      <p>
      Hajime has been an amateur photographer since late 1990s. He particularly
      enjoys <a href="https://yamasakivukelic.com/galleries.html" title="Hajime's photo galleries">macro, street and travel photography</a>.
      </p>
    </section>

    <script>
      {
        'use strict'

        let reformatTimes = () => document.querySelectorAll('time[datetime]')
          .forEach($ => 
            $.textContent = new Date($.dateTime)
              .toLocaleDateString(navigator.language, { 
                year: 'numeric', 
                month: 'long',
              })
          )
        
        let onInit = reformatTimes
        
        onInit()
      }
    </script>
  </body>
</html>
`

if (require.main === module) {
  let fs = require('fs')
  fs.writeFileSync('index.html', renderResume(), { encoding: 'utf-8' })
}
