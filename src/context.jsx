import { createContext, useContext, useEffect, useState } from 'react'
import { dict } from './i18n'

const LanguageContext = createContext(null)

function readLang() {
  try {
    return localStorage.getItem('uf-lang') === 'ar' ? 'ar' : 'en'
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

export function usePageTitle(title) {
  const { lang } = useI18n()
  useEffect(() => {
    const brand = lang === 'ar' ? 'بانكوك للمفروشات' : 'Bangkok Furniture'
    document.title = title ? `${title} · ${brand}` : `${brand} · New Souq Al Haraj`
  }, [title, lang])
}
