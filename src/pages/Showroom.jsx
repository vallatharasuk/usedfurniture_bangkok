import { address, hoursFor, mapsDirections, mapsSearch, shop } from '../data'
import { useI18n, usePageTitle } from '../context'
import { MapEmbed, PageHero } from '../components'

export default function Showroom() {
  const { lang, t } = useI18n()
  const hours = hoursFor(lang)
  usePageTitle(t.showroom.title, t.seo.showroomDescription)

  return (
    <>
      <PageHero
        video
        videoSrc="/video/floor-suite.mp4"
        poster="/images/floor-champagne.jpg"
        eyebrow={t.showroom.eyebrow}
        title={t.showroom.title}
        lede={t.showroom.lede}
      />
      <section className="section tight">
        <div className="wrap story-grid">
          <figure className="story-photo">
            <img src="/images/shop-front.jpg" alt={t.showroom.photo} />
          </figure>
          <div>
            <h2>{t.showroom.findTitle}</h2>
            <ol className="find-list">
              {t.showroom.find.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="lede dark">{t.showroom.hoursNote}</p>
          </div>
        </div>
      </section>
      <section className="section alt tight">
        <div className="wrap visit-grid">
          <MapEmbed />
          <div className="address-card">
            <h2>{t.common.address}</h2>
            <ul>
              {address[lang].map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p>
              {t.common.hours}: {hours}
            </p>
            <p>
              {t.common.cr} {shop.cr}
            </p>
            <h3>{t.showroom.driveTitle}</h3>
            <p>{t.showroom.drive}</p>
            <div className="hero-actions">
              <a className="btn btn-solid" href={mapsSearch} target="_blank" rel="noreferrer">
                {t.visit.maps}
              </a>
              <a className="btn btn-line" href={mapsDirections} target="_blank" rel="noreferrer">
                {t.visit.directions}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
