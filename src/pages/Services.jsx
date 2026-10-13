import { Link } from 'react-router-dom'
import { shop } from '../data'
import { homeFor } from '../homeCopy'
import { useI18n, usePageTitle } from '../context'
import { BuyCta, PageHero } from '../components'
import { waUrl } from '../whatsapp'

export default function Services() {
  const { lang, t } = useI18n()
  const h = homeFor(lang)
  usePageTitle(t.plus.servicesPage.title, t.seo.servicesDescription)

  return (
    <>
      <PageHero eyebrow={t.plus.servicesPage.eyebrow} title={t.plus.servicesPage.title} lede={t.plus.servicesPage.lede} />
      <section className="section tight">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{h.offersEyebrow}</p>
            <h2>{h.offersTitle}</h2>
            <p className="lede dark">{h.offersLede}</p>
          </div>
          <div className="service-grid">
            {t.plus.servicesPage.items.map((item, index) => (
              <article className="service-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt tight">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{h.whyChooseEyebrow}</p>
            <h2>{h.whyChooseTitle}</h2>
            <p className="lede dark">{h.whyChooseLede}</p>
          </div>
          <div className="why-rail">
            {h.steps.map((step, index) => (
              <article className="why-card" key={step.title}>
                <img src={step.image} alt={step.alt} />
                <div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="hero-actions service-actions">
            <a className="btn btn-solid" href={`tel:${shop.phoneTel}`}>
              {h.call}
            </a>
            <a className="btn btn-mint" href={waUrl(t.waHello)} target="_blank" rel="noreferrer">
              {t.nav.whatsapp}
            </a>
            <Link className="btn btn-line" to="/sell">
              {h.offer}
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{t.plus.flowEyebrow}</p>
            <h2>{h.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {h.faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <BuyCta />
    </>
  )
}
