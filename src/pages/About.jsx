import { hoursFor } from '../data'
import { homeFor } from '../homeCopy'
import { useI18n, usePageTitle } from '../context'
import { BuyCta, PageHero } from '../components'

export default function About() {
  const { lang, t } = useI18n()
  const h = homeFor(lang)
  const hours = hoursFor(lang)
  usePageTitle(t.about.title, t.seo.aboutDescription)
  const facts = [
    ...h.stats.map((stat) => ({ value: stat.value, label: stat.label })),
    { value: hours, label: t.common.hours },
  ]

  return (
    <>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} lede={t.about.lede} />
      <section className="section tight">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{h.whyEyebrow}</p>
            <h2>{h.whyTitle}</h2>
            <p className="lede dark">{t.about.p1}</p>
          </div>
          <div className="stat-row">
            {facts.map((fact) => (
              <article key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap story-grid">
          <figure className="story-photo">
            <img src="/images/shop-front.jpg" alt={t.story.photo} />
          </figure>
          <div className="prose">
            <p className="eyebrow dark">{t.about.reuseTitle}</p>
            <h2>{t.about.title}</h2>
            <p>{t.about.p2}</p>
            <p>{t.about.reuse}</p>
            <p className="quiet">{t.common.brandNote}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{h.casesEyebrow}</p>
            <h2>{h.casesTitle}</h2>
            <p className="lede dark">{h.casesNote}</p>
          </div>
          <div className="case-grid">
            {h.cases.map((item) => (
              <article className="case-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BuyCta />
    </>
  )
}
