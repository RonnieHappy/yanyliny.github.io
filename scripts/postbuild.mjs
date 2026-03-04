// Post-build script: creates route-specific index.html files with unique meta tags
// so search engines get proper metadata for each page even without JS execution.

import { mkdirSync, writeFileSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')

const routes = [
  {
    path: '/projects',
    title: 'Projects — Yany Lin',
    description: 'Research projects by Yany Lin: acoustic bubble dynamics, hip arthroplasty outcomes, organ transplant ethics, tibial stress analysis, fungal hygroscopy, and multimodal neuroimaging.',
    noscript: `
      <h1>Yany Lin — Research Projects</h1>
      <ul>
        <li>Acoustic-Driven Surface Cleaning with Millimeter-Sized Bubbles at Translational Resonance — Accepted, In Press at Droplet (2025)</li>
        <li>Return to Sports After Total Hip Arthroplasty — Published in The Journal of Arthroplasty (2025)</li>
        <li>Harm-Threshold Utilitarianism: Exploring an Ethical Framework for Organ Transplant Allocation — Published in Frontiers in Health Services (2025)</li>
        <li>Impact Orientation and Knee Bracing Effects on Tibial Stress: A Finite Element Study — In Submission (2025)</li>
        <li>Fungal Hyphae Reorganize Condensation Fields as Distributed Hygroscopic Sinks — In Submission at Nature Communications (2025)</li>
        <li>Integrating Multimodal Neuroimaging for Neurological Disorders — In Revision at SN Comprehensive Clinical Medicine (2025)</li>
      </ul>
      <p><a href="/">Back to Home</a></p>
    `,
  },
  {
    path: '/gallery',
    title: 'Gallery — Yany Lin',
    description: 'Photos from Yany Lin\'s research, conferences, sports, and life — bubble experiments, fluid dynamics talks, football, wrestling, and more.',
    noscript: `
      <h1>Yany Lin — Gallery</h1>
      <p>Photos from research (bubble dynamics, fungal hygroscopy), academic conferences (APS, TIFDM, NYSSOS), and sports (football, wrestling, lacrosse, MMA).</p>
      <p><a href="/">Back to Home</a></p>
    `,
  },
]

// Read the base index.html
const baseHtml = readFileSync(join(dist, 'index.html'), 'utf-8')

for (const route of routes) {
  let html = baseHtml

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  )

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${route.description}" />`
  )

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="https://yanyliny.github.io${route.path}" />`
  )

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${route.title}" />`
  )
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${route.description}" />`
  )
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="https://yanyliny.github.io${route.path}" />`
  )

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${route.title}" />`
  )
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${route.description}" />`
  )

  // Add noscript content before </body> for bots that don't run JS
  html = html.replace(
    '</body>',
    `<noscript>${route.noscript}</noscript>\n</body>`
  )

  // Write to route directory
  const routeDir = join(dist, route.path)
  mkdirSync(routeDir, { recursive: true })
  writeFileSync(join(routeDir, 'index.html'), html)
  console.log(`  ✓ ${route.path}/index.html`)
}

// Also add noscript to root index.html
let rootHtml = readFileSync(join(dist, 'index.html'), 'utf-8')
rootHtml = rootHtml.replace(
  '</body>',
  `<noscript>
    <h1>Yany Lin — Researcher | Cornell University</h1>
    <p>Research in experimental fluid mechanics, medical ethics, and orthopaedic outcomes.</p>
    <nav>
      <a href="/projects">Projects</a> |
      <a href="/gallery">Gallery</a> |
      <a href="https://zenithvintage.org">ZenithVintage</a> |
      <a href="https://www.youtube.com/@TheYanyLin">YouTube</a>
    </nav>
  </noscript>\n</body>`
)
writeFileSync(join(dist, 'index.html'), rootHtml)
console.log('  ✓ /index.html (with noscript)')

console.log('\n✓ Postbuild complete — all routes have unique meta tags + noscript fallback\n')
