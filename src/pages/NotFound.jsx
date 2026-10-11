import { Link } from 'react-router-dom'
import { useI18n, usePageTitle } from '../context'

export default function NotFound() {
  const { t } = useI18n()
  usePageTitle(t.notFound.title, t.seo.notFoundDescription, false)
  return (
    <section className="section">
      <div className="wrap page-hero">
        <h1>{t.notFound.title}</h1>
        <p className="lede dark">{t.notFound.lede}</p>
        <Link className="btn btn-solid" to="/">
          {t.notFound.cta}
        </Link>
      </div>
    </section>
  )
}
