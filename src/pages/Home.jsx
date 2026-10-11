import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { address, categoryCovers, categoryIds, formatQar, hoursFor, mapsSearch, pieceCopy, pieces, shop } from '../data'
import { useI18n, usePageTitle } from '../context'
import { Disclaimer, MapEmbed, Marquee, PieceCard, VideoBackdrop } from '../components'

export default function Home() {
  const { lang, t } = useI18n()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const hours = hoursFor(lang)
  const ranges = categoryIds.map((id) => {
    const prices = pieces.filter((piece) => piece.category === id).map((piece) => piece.price)
    return { id, min: Math.min(...prices), max: Math.max(...prices) }
  })
  const gallery = pieces.filter((piece) => piece.image.includes('/floor-')).slice(0, 8)
  usePageTitle('', t.seo.homeDescription)

  function onSearch(event) {
    event.preventDefault()
    const next = query.trim()
    navigate(next ? `/collection?q=${encodeURIComponent(next)}` : '/collection')
  }

  return (
    <>
      <section className="hero landing">
        <div className="landing-film">
          <VideoBackdrop />
        </div>
        <div className="wrap">
          <div className="landing-sheet">
            <p className="landing-pin">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="11" r="2.1" fill="currentColor" />
              </svg>
              {t.hero.eyebrow}
            </p>
            <h1>
              {t.hero.titleLead}
              <em>{t.hero.titleRest}</em>
            </h1>
            <p className="lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <Link className="btn btn-go" to="/collection">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 10.5 12 4l8 6.5V20H4V10.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <path d="M9 20v-6h6v6" fill="none" stroke="currentColor" strokeWidth="1.7" />
                </svg>
                {t.hero.buy}
                <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link className="btn btn-sell" to="/sell">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.5 4H19v6.5L11 18.5 5.5 13 12.5 4Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <circle cx="16.2" cy="7.8" r="1.1" fill="currentColor" />
                </svg>
                {t.hero.sell}
                <svg className="arrow" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <form className="search landing-search" onSubmit={onSearch}>
              <label className="sr-only" htmlFor="floor-search">
                {t.hero.searchLabel}
              </label>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M16 16.5 20 20.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                id="floor-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.hero.searchPlaceholder}
              />
              <button className="btn btn-solid" type="submit">
                {t.hero.search}
              </button>
            </form>
            <ul className="landing-facts">
              <li>
                <span className="fact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                <small>{t.ticket.open}</small>
                <strong className="num">{hours}</strong>
              </li>
              <li>
                <a href={`tel:${shop.phoneTel}`}>
                  <span className="fact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 3.4A8.4 8.4 0 0 0 4.6 15.8l-1 4.2 4.3-1.1A8.4 8.4 0 1 0 12 3.4Zm4.4 11.8c-.2.5-1 1-1.5 1-.4 0-.8.1-2.6-.6-2.1-.9-3.5-3-3.6-3.2-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.5c.2 0 .3 0 .5.4.2.5.6 1.8.7 2 0 .1 0 .3-.1.4l-.3.4c-.1.1-.2.3-.1.5.1.3.6 1.1 1.4 1.8.9.8 1.7 1.1 2 .2.1.2.3.2.5.1l.4-.5c.2-.2.3-.2.5-.1l1.8.8c.2.1.3.2.4.4 0 .2 0 .6-.2 1Z" />
                    </svg>
                  </span>
                  <small>{t.ticket.phone}</small>
                  <strong className="num">{shop.phoneDisplay}</strong>
                </a>
              </li>
              <li className="fact-pickup">
                <span className="fact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 7h11v8H3V7Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M14 10h4l3 3v2h-7v-5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    <circle cx="7" cy="17.5" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
                    <circle cx="17" cy="17.5" r="1.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </span>
                <small>{t.ticket.pickup}</small>
                <strong>{t.ticket.city}</strong>
              </li>
            </ul>
          </div>
        </div>
        <svg className="landing-wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#4c1022" d="M0 90h1440V48C1080 96 860 8 720 8S300 96 0 48v42Z" />
        </svg>
      </section>

      <Marquee />

      <section className="promise">
        <div className="wrap">
          <h2>{t.trustTitle}</h2>
          <div className="promise-grid">
            {t.trust.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{t.plus.flowEyebrow}</p>
            <h2>{t.plus.flowTitle}</h2>
            <p className="lede dark">{t.plus.flowLede}</p>
          </div>
          <div className="flow-grid">
            {t.sell.steps.map((step, index) => (
              <article className="flow-card" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{t.floor.eyebrow}</p>
            <h2>{t.floor.title}</h2>
            <p className="lede dark">{t.floor.lede}</p>
          </div>
          <div className="cat-grid">
            {categoryIds.map((id, index) => (
              <Link className="cat-card" key={id} to={`/collection?cat=${id}`}>
                <img src={categoryCovers[id]} alt="" />
                <span>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                  {t.categories[id]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow dark">{t.featured.eyebrow}</p>
              <h2>{t.featured.title}</h2>
              <p className="lede dark">{t.featured.lede}</p>
            </div>
            <Link className="btn btn-solid" to="/collection">
              {t.featured.cta}
            </Link>
          </div>
          <div className="piece-grid">
            {['silver-bedroom-suite', 'grey-dressing-wall', 'eight-seat-dining', 'white-gloss-bedroom', 'stone-tv-unit', 'champagne-bed']
              .map((slug) => pieces.find((piece) => piece.slug === slug))
              .filter(Boolean)
              .map((piece) => (
                <PieceCard key={piece.slug} piece={piece} />
              ))}
          </div>
          <Disclaimer />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow dark">{t.plus.rangesEyebrow}</p>
            <h2>{t.plus.rangesTitle}</h2>
            <p className="lede dark">{t.plus.rangesLede}</p>
          </div>
          <div className="range-board">
            {ranges.map((range) => (
              <Link className="range-card" key={range.id} to={`/collection?cat=${range.id}`}>
                <span>{t.categories[range.id]}</span>
                <strong>
                  {formatQar(range.min, lang)} – {formatQar(range.max, lang)}
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow dark">{t.plus.galleryEyebrow}</p>
              <h2>{t.plus.galleryTitle}</h2>
            </div>
            <Link className="btn btn-solid" to="/collection">
              {t.plus.galleryCta}
            </Link>
          </div>
          <div className="gallery">
            {gallery.map((piece) => {
              const name = pieceCopy(piece, lang).name
              return (
                <Link key={piece.slug} to={`/collection/${piece.slug}`}>
                  <img src={piece.image} alt={name} />
                  <span>{name}</span>
                </Link>
              )
            })}
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

      <section className="story-stage">
        <figure className="story-photo">
          <img src="/images/shop-front.jpg" alt={t.story.photo} />
          <figcaption>
            {t.common.shop} {shop.shopNo}
          </figcaption>
        </figure>
        <div className="story-copy">
          <p className="eyebrow dark">{t.story.eyebrow}</p>
          <h2>{t.story.title}</h2>
          <p className="lede dark">{t.story.text}</p>
          <Link className="btn btn-solid" to="/showroom">
            {t.story.link}
          </Link>
        </div>
      </section>

      <section className="band">
        <div className="wrap band-inner">
          <div>
            <h2>{t.band.title}</h2>
            <p>{t.band.text}</p>
          </div>
          <Link className="btn btn-light" to="/sell">
            {t.band.cta}
          </Link>
        </div>
      </section>

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
