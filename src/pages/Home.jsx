import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { address, formatQar, hoursFor, mapsSearch, pieces, shop } from '../data'
import { homeFor } from '../homeCopy'
import { useI18n, usePageTitle } from '../context'
import { BuyCta, Disclaimer, MapEmbed, Marquee, VideoBackdrop } from '../components'
import { waUrl } from '../whatsapp'

const offerCats = ['beds', 'sofas', 'tables', 'wardrobes', 'appliances', 'office']

const mosaic = [
  { src: '/images/floor-white-bed.jpg', alt: 'White bedroom set on the shop floor' },
  { src: '/images/floor-silver-bed.jpg', alt: 'Silver bedroom suite at Shop 13' },
  { src: '/images/floor-dining.jpg', alt: 'Dining furniture at New Souq Al Haraj' },
  { src: '/images/floor-grey-wall.jpg', alt: 'Wardrobe wall photographed in the shop' },
  { src: '/images/sofa-ivory.jpg', alt: 'Ivory sofa of the kind we buy in Doha' },
  { src: '/images/floor-tv.jpg', alt: 'TV unit on the floor at Shop 13' },
  { src: '/images/fridge.jpg', alt: 'Refrigerator of the kind we collect' },
  { src: '/images/shop-front.jpg', alt: 'Bangkok Furniture storefront, Shop 13' },
]

export default function Home() {
  const { lang, t } = useI18n()
  const h = homeFor(lang)
  const hours = hoursFor(lang)
  usePageTitle('', t.seo.homeDescription)

  useEffect(() => {
    const id = 'faq-jsonld'
    const script = document.getElementById(id) || document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: h.faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    })
    if (!script.parentNode) document.head.appendChild(script)
    return () => script.remove()
  }, [h.faqs])

  const ranges = offerCats.map((id) => {
    const prices = pieces.filter((piece) => piece.category === id).map((piece) => piece.price)
    return { id, min: Math.min(...prices), max: Math.max(...prices) }
  })

  return (
    <>
      <section className="buy-hero">
        <VideoBackdrop />
        <div className="buy-hero-shade" />
        <div className="buy-hero-copy">
          <p className="buy-pin">{t.hero.eyebrow}</p>
          <h1>
            {t.hero.titleLead} <em>{t.hero.titleRest}</em>
            <span className="buy-h1-ar">{h.secondLine}</span>
          </h1>
          <div className="buy-hero-row">
            <p className="lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <a className="btn btn-solid" href={`tel:${shop.phoneTel}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 4.6h2.1l1.1 2.8-1.5 1a11.2 11.2 0 0 0 5.9 5.9l1-1.5 2.8 1.1V18a1.8 1.8 0 0 1-2 1.8A14.4 14.4 0 0 1 4.2 6.6 1.8 1.8 0 0 1 8 4.6Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
                {h.call}
              </a>
              <a className="btn btn-mint" href={waUrl(t.waHello)} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 3.1A8.8 8.8 0 0 0 4.3 16.2L3.2 20.8l4.7-1.2A8.8 8.8 0 1 0 12 3.1Zm4.7 12.5c-.2.6-1.1 1.1-1.6 1.1-.4 0-.9.1-2.8-.7-2.3-1-3.8-3.3-3.9-3.4-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.6.7 2 .7 2.1.1.2 0 .4-.1.5l-.3.4c-.1.2-.3.3-.1.6.2.3.7 1.2 1.5 1.9 1 .9 1.9 1.2 2.2 1.3.3.1.4 0 .6-.2l.5-.6c.2-.2.3-.2.5-.1l2 .9c.2.1.4.2.4.4.1.2 0 .7-.2 1.1Z" />
                </svg>
                {t.nav.whatsapp}
              </a>
            </div>
          </div>
          <ul className="buy-stats">
            {h.stats.map((stat) => (
              <li key={stat.label}>
                <strong className="num">{stat.value}</strong>
                <small>{stat.label}</small>
              </li>
            ))}
          </ul>
        </div>
        <Marquee labels={h.ticker} />
      </section>

      <section className="section why-buy">
        <div className="wrap">
          <div className="why-copy">
            <p className="eyebrow dark">{h.whyEyebrow}</p>
            <h2>{h.whyTitle}</h2>
            <p className="lede dark">{h.whyLede}</p>
          </div>
        </div>
      </section>

      <section className="section tight">
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
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{h.mosaicEyebrow}</p>
            <h2>{h.mosaicTitle}</h2>
          </div>
          <div className="mosaic">
            {mosaic.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{h.offersEyebrow}</p>
            <h2>{h.offersTitle}</h2>
            <p className="lede dark">{h.offersLede}</p>
          </div>
          <div className="offer-rail">
            {h.offers.map((offer, index) => {
              const range = ranges[index]
              return (
                <Link className="offer-card" key={offer.title} to={`/collection?cat=${offerCats[index]}`}>
                  <img src={offer.image} alt="" />
                  <div>
                    <h3>{offer.title}</h3>
                    <p>{offer.text}</p>
                    {range && (
                      <strong>
                        {formatQar(range.min, lang)} – {formatQar(range.max, lang)}
                      </strong>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
          <Disclaimer />
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

      <section className="locale-band">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">{t.plus.areasEyebrow}</p>
            <h2>{t.plus.areasTitle}</h2>
            <p className="lede">{t.plus.areasLede}</p>
          </div>
          <div className="place-grid">
            {t.plus.places.map((place) => (
              <Link key={place} to="/areas">
                {place}
              </Link>
            ))}
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

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{t.visit.eyebrow}</p>
            <h2>{t.visit.title}</h2>
            <p className="lede dark">{t.visit.lede}</p>
          </div>
          <div className="visit-stage">
            <MapEmbed />
            <div className="address-card">
              <h3>{t.common.address}</h3>
              <ul>
                {address[lang].map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p>
                {t.common.hours}: {hours}
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href={mapsSearch} target="_blank" rel="noreferrer">
                  {t.visit.maps}
                </a>
                <a className="btn btn-line" href={`tel:${shop.phoneTel}`}>
                  {shop.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
