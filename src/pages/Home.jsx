import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { address, categoryCovers, categoryIds, mapsSearch, pieces, shop } from '../data'
import { useI18n, usePageTitle } from '../context'
import { Disclaimer, MapEmbed, Marquee, PieceCard, VideoBackdrop } from '../components'

export default function Home() {
  const { lang, t } = useI18n()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const hours = lang === 'ar' ? shop.hoursAr : shop.hoursEn
  usePageTitle('')

  function onSearch(event) {
    event.preventDefault()
    const next = query.trim()
    navigate(next ? `/collection?q=${encodeURIComponent(next)}` : '/collection')
  }

  return (
    <>
      <section className="hero">
        <VideoBackdrop />
        <div className="hero-shade" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>
              {t.hero.titleLead}
              <br />
              {t.hero.titleRest}
            </h1>
            <p className="lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <Link className="btn btn-light" to="/collection">
                {t.hero.buy}
              </Link>
              <Link className="btn btn-line" to="/sell">
                {t.hero.sell}
              </Link>
            </div>
            <form className="search" onSubmit={onSearch}>
              <label className="sr-only" htmlFor="floor-search">
                {t.hero.searchLabel}
              </label>
              <input
                id="floor-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.hero.searchPlaceholder}
              />
              <button className="btn btn-light" type="submit">
                {t.hero.search}
              </button>
            </form>
          </div>
          <aside className="ticket">
            <span>{t.ticket.open}</span>
            <strong className="num">{hours}</strong>
            <span>{t.ticket.phone}</span>
            <a href={`tel:${shop.phoneTel}`}>{shop.phoneDisplay}</a>
            <span>{t.ticket.pickup}</span>
            <b>{t.ticket.city}</b>
          </aside>
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.trustTitle}</h2>
          </div>
          <div className="trust-grid">
            {t.trust.map((item) => (
              <article className="trust-card" key={item.title}>
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
        <div className="wrap story-grid">
          <figure className="story-photo">
            <img src="/images/shop-front.jpg" alt={t.story.photo} />
            <figcaption>
              {t.common.shop} {shop.shopNo}
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow dark">{t.story.eyebrow}</p>
            <h2>{t.story.title}</h2>
            <p className="lede dark">{t.story.text}</p>
            <Link className="btn btn-solid" to="/showroom">
              {t.story.link}
            </Link>
          </div>
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
          <div className="visit-grid">
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
