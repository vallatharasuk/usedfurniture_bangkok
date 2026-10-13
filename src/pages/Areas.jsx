import { Link } from 'react-router-dom'
import { useI18n, usePageTitle } from '../context'
import { BuyCta, MapEmbed, PageHero } from '../components'

export default function Areas() {
  const { t } = useI18n()
  usePageTitle(t.plus.areasPage.title, t.seo.areasDescription)

  return (
    <>
      <PageHero eyebrow={t.plus.areasPage.eyebrow} title={t.plus.areasPage.title} lede={t.plus.areasPage.lede} />
      <section className="section tight">
        <div className="wrap">
          <div className="place-grid large">
            {t.plus.places.map((place) => (
              <Link key={place} to="/sell">
                {place}
              </Link>
            ))}
          </div>
        </div>
        <div className="wrap visit-grid area-map">
          <MapEmbed />
          <div className="address-card">
            <h2>{t.plus.areasTitle}</h2>
            <p className="lede dark">{t.plus.areasLede}</p>
            <Link className="btn btn-solid" to="/sell">
              {t.band.cta}
            </Link>
          </div>
        </div>
      </section>
      <BuyCta />
    </>
  )
}
