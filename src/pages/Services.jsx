import { Link } from 'react-router-dom'
import { useI18n, usePageTitle } from '../context'
import { PageHero } from '../components'

export default function Services() {
  const { t } = useI18n()
  usePageTitle(t.plus.servicesPage.title, t.seo.servicesDescription)

  return (
    <>
      <PageHero eyebrow={t.plus.servicesPage.eyebrow} title={t.plus.servicesPage.title} lede={t.plus.servicesPage.lede} />
      <section className="section tight">
        <div className="wrap service-grid">
          {t.plus.servicesPage.items.map((item, index) => (
            <article className="service-card" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="wrap hero-actions service-actions">
          <Link className="btn btn-solid" to="/collection">
            {t.hero.buy}
          </Link>
          <Link className="btn btn-line" to="/sell">
            {t.hero.sell}
          </Link>
        </div>
      </section>
    </>
  )
}
