import { shop } from '../data'
import { useI18n, usePageTitle } from '../context'
import { PageHero } from '../components'

export default function About() {
  const { lang, t } = useI18n()
  const hours = lang === 'ar' ? shop.hoursAr : shop.hoursEn
  usePageTitle(t.about.title)
  const facts = [
    [t.common.shop, shop.shopNo],
    [t.common.cr, shop.cr],
    [t.common.phone, shop.phoneDisplay],
    [t.common.hours, hours],
  ]

  return (
    <>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} lede={t.about.lede} />
      <section className="section tight">
        <div className="wrap story-grid">
          <figure className="story-photo">
            <img src="/images/shop-front.jpg" alt={t.story.photo} />
          </figure>
          <div className="prose">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="quiet">{t.common.brandNote}</p>
          </div>
        </div>
        <div className="wrap stat-row">
          {facts.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong className={value === shop.phoneDisplay || value === shop.cr ? 'num' : undefined}>{value}</strong>
            </article>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="wrap story-grid">
          <div>
            <h2>{t.about.reuseTitle}</h2>
            <p className="lede dark">{t.about.reuse}</p>
          </div>
          <figure className="story-photo natural">
            <img src="/images/poster.jpg" alt={t.about.poster} />
          </figure>
        </div>
        <figure className="wrap wide-photo">
          <img src="/images/living-wide.jpg" alt={t.about.room} />
          <figcaption>{t.about.roomCaption}</figcaption>
        </figure>
      </section>
    </>
  )
}
