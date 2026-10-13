import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dict } from '../src/i18n.js'
import { siteUrl } from '../src/site.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const origin = siteUrl.replace(/\/$/, '')
const brand = dict.en.footer.rights

const pages = [
  {
    path: '/',
    file: 'index.html',
    title: `${brand} · New Souq Al Haraj`,
    description: dict.en.seo.homeDescription,
  },
  {
    path: '/collection',
    file: 'collection.html',
    title: `${dict.en.collection.title} · ${brand}`,
    description: dict.en.seo.collectionDescription,
  },
  {
    path: '/sell',
    file: 'sell.html',
    title: `${dict.en.sell.title} · ${brand}`,
    description: dict.en.seo.sellDescription,
  },
  {
    path: '/about',
    file: 'about.html',
    title: `${dict.en.about.title} · ${brand}`,
    description: dict.en.seo.aboutDescription,
  },
  {
    path: '/contact',
    file: 'contact.html',
    title: `${dict.en.contact.title} · ${brand}`,
    description: dict.en.seo.contactDescription,
  },
  {
    path: '/services',
    file: 'services.html',
    title: `${dict.en.plus.servicesPage.title} · ${brand}`,
    description: dict.en.seo.servicesDescription,
  },
  {
    path: '/areas',
    file: 'areas.html',
    title: `${dict.en.plus.areasPage.title} · ${brand}`,
    description: dict.en.seo.areasDescription,
  },
  {
    path: '/privacy',
    file: 'privacy.html',
    title: `${dict.en.plus.privacyPage.title} · ${brand}`,
    description: dict.en.seo.privacyDescription,
  },
  {
    path: '/terms',
    file: 'terms.html',
    title: `${dict.en.plus.termsPage.title} · ${brand}`,
    description: dict.en.seo.termsDescription,
  },
]

function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function replaceMeta(html, attr, key, value) {
  const pattern = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`)
  if (!pattern.test(html)) throw new Error(`Missing meta ${attr}="${key}"`)
  return html.replace(pattern, `$1${escapeAttr(value)}$2`)
}

function render(page) {
  let html = template
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(page.title)}</title>`)
  html = replaceMeta(html, 'name', 'description', page.description)
  html = replaceMeta(html, 'property', 'og:title', page.title)
  html = replaceMeta(html, 'property', 'og:description', page.description)
  html = replaceMeta(html, 'name', 'twitter:title', page.title)
  html = replaceMeta(html, 'name', 'twitter:description', page.description)
  if (!origin) return html
  const url = `${origin}${page.path === '/' ? '' : page.path}`
  const image = `${origin}/images/shop-front.jpg`
  html = replaceMeta(html, 'property', 'og:image', image)
  html = replaceMeta(html, 'name', 'twitter:image', image)
  html = html.replace('"image": "/images/shop-front.jpg"', `"image": "${image}"`)
  if (!html.includes('rel="canonical"')) {
    html = html.replace('</head>', `    <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n  </head>`)
  }
  if (!html.includes('"url":')) {
    html = html.replace('"@type": "FurnitureStore"', `"@type": "FurnitureStore",\n        "url": "${origin}/"`)
  }
  return html
}

for (const page of pages) {
  const file = join(dist, page.file)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, render(page))
}

if (origin) {
  const locs = pages
    .map((page) => `  <url><loc>${origin}${page.path === '/' ? '/' : page.path}</loc></url>`)
    .join('\n')
  writeFileSync(
    join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locs}\n</urlset>\n`,
  )
  const robots = readFileSync(join(dist, 'robots.txt'), 'utf8').trim()
  writeFileSync(join(dist, 'robots.txt'), `${robots}\n\nSitemap: ${origin}/sitemap.xml\n`)
}

console.log(`Wrote ${pages.length} SEO pages${origin ? ` and sitemap for ${origin}` : ''}.`)
