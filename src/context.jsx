import { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { dict } from './i18n'
import { siteUrl } from './site'

const LanguageContext = createContext(null)

const languages = ['en', 'ar', 'bn', 'hi']

function readLang() {
  try {
    const saved = localStorage.getItem('uf-lang')
    return languages.includes(saved) ? saved : 'en'
  } catch {
    return 'en'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try {
      localStorage.setItem('uf-lang', lang)
    } catch {
      /* private mode */
    }
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useI18n must be used inside LanguageProvider')
  return { ...value, t: dict[value.lang] }
}

const ogLocale = { en: 'en_US', ar: 'ar_QA', bn: 'bn_BD', hi: 'hi_IN' }

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function usePageTitle(title, description, indexable = true) {
  const { lang } = useI18n()
  const { pathname } = useLocation()
  useEffect(() => {
    const brand = dict[lang].footer.rights
    const fullTitle = title ? `${title} · ${brand}` : `${brand} · New Souq Al Haraj`
    const summary = description || dict[lang].seo.homeDescription
    document.title = fullTitle
    document.documentElement.lang = lang
    upsertMeta('name', 'description', summary)
    upsertMeta('name', 'robots', indexable ? 'index,follow' : 'noindex,follow')
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', summary)
    upsertMeta('property', 'og:locale', ogLocale[lang] || 'en_US')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', summary)
    const origin = siteUrl.replace(/\/$/, '')
    const pageUrl = origin ? `${origin}${pathname}` : ''
    upsertLink('canonical', pageUrl)
    if (pageUrl) upsertMeta('property', 'og:url', pageUrl)
    else document.head.querySelector('meta[property="og:url"]')?.remove()
    if (origin) {
      upsertMeta('property', 'og:image', `${origin}/images/shop-front.jpg`)
      upsertMeta('name', 'twitter:image', `${origin}/images/shop-front.jpg`)
    }
  }, [title, description, indexable, lang, pathname])
}
