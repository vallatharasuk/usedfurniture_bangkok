import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { address, categoryIds, formatQar, mapsDirections, mapsSearch, pieceCopy, shop } from './data'
import { homeFor } from './homeCopy'
import { heroPoster, heroVideo } from './media'
import { useI18n } from './context'
import { openWhatsApp, waUrl } from './whatsapp'

export function VideoBackdrop({ src = heroVideo, poster = heroPoster }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return undefined
    const play = () => {
      video.playbackRate = 0.8
      const pending = video.play()
      if (pending && typeof pending.catch === 'function') pending.catch(() => {})
    }
    if (video.readyState >= 2) play()
    else video.addEventListener('canplay', play, { once: true })
    return () => video.removeEventListener('canplay', play)
  }, [src])

  return (
    <video
      ref={ref}
      className="bg-video"
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      preload="auto"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export function Logo() {
  const { t } = useI18n()
  return (
    <Link to="/" className="logo" aria-label={t.footer.rights}>
      <span className="logo-badge">
        <img className="logo-mark" src="/images/logo.jpg" alt="" width="52" height="52" />
      </span>
      <span className="logo-words">
        <strong>{t.brand.name}</strong>
        <em>{t.brand.line}</em>
      </span>
    </Link>
  )
}

function navClass(isActive) {
  return isActive ? 'active' : undefined
}

const languages = [
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'ar', label: 'العربية', short: 'ع' },
  { id: 'bn', label: 'বাংলা', short: 'বাং' },
  { id: 'hi', label: 'हिन्दी', short: 'हि' },
]

export function Layout() {
  const { lang, setLang, t } = useI18n()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)
  const currentLanguage = languages.find((item) => item.id === lang) ?? languages[0]

  useEffect(() => {
    setOpen(false)
    setLangOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!langOpen) return undefined
    function onPointer(event) {
      if (!langRef.current?.contains(event.target)) setLangOpen(false)
    }
    function onKey(event) {
      if (event.key === 'Escape') setLangOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [langOpen])

  useEffect(() => {
    document.body.classList.toggle('menu-lock', open)
    return () => document.body.classList.remove('menu-lock')
  }, [open])

  return (
    <div className="site">
      <a className="skip" href="#main">
        {t.nav.skip}
      </a>
      <header className="header">
        <div className={`nav ${open ? 'nav-open' : ''}`}>
          <div className="wrap nav-inner">
            <Logo />
            <div className="nav-panel">
              <p className="menu-note">{t.topbar}</p>
              <nav className="nav-links" aria-label="Primary">
                <NavLink to="/services" className={({ isActive }) => navClass(isActive)}>
                  {t.plus.services}
                </NavLink>
                <NavLink to="/collection" className={({ isActive }) => navClass(isActive || pathname.startsWith('/collection'))}>
                  {t.nav.buy}
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => navClass(isActive)}>
                  {t.nav.about}
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => navClass(isActive)}>
                  {t.nav.contact}
                </NavLink>
              </nav>
              <a className="btn btn-solid menu-call" href={`tel:${shop.phoneTel}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 4.6h2.1l1.1 2.8-1.5 1a11.2 11.2 0 0 0 5.9 5.9l1-1.5 2.8 1.1V18a1.8 1.8 0 0 1-2 1.8A14.4 14.4 0 0 1 4.2 6.6 1.8 1.8 0 0 1 8 4.6Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
                {shop.phoneDisplay}
              </a>
              <a className="btn btn-mint menu-wa" href={waUrl(t.waHello)} target="_blank" rel="noreferrer">
                {t.nav.whatsapp}
              </a>
            </div>
            <div className="nav-tools">
              <a className="btn btn-solid head-phone" href={`tel:${shop.phoneTel}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 4.6h2.1l1.1 2.8-1.5 1a11.2 11.2 0 0 0 5.9 5.9l1-1.5 2.8 1.1V18a1.8 1.8 0 0 1-2 1.8A14.4 14.4 0 0 1 4.2 6.6 1.8 1.8 0 0 1 8 4.6Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
                {shop.phoneDisplay}
              </a>
              <a className="head-call" href={`tel:${shop.phoneTel}`} aria-label={shop.phoneDisplay}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 4.6h2.1l1.1 2.8-1.5 1a11.2 11.2 0 0 0 5.9 5.9l1-1.5 2.8 1.1V18a1.8 1.8 0 0 1-2 1.8A14.4 14.4 0 0 1 4.2 6.6 1.8 1.8 0 0 1 8 4.6Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </a>
              <div className="lang-menu" ref={langRef}>
                <button
                  type="button"
                  className="lang"
                  aria-haspopup="listbox"
                  aria-expanded={langOpen}
                  aria-label={t.nav.language}
                  onClick={() => setLangOpen((value) => !value)}
                >
                  <span className="lang-long">{currentLanguage.label}</span>
                  <span className="lang-short">{currentLanguage.short}</span>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3.5 6.2 8 10.5l4.5-4.3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {langOpen && (
                  <ul className="lang-list" role="listbox" aria-label={t.nav.language}>
                    {languages.map((item) => (
                      <li key={item.id} role="presentation">
                        <button
                          type="button"
                          role="option"
                          aria-selected={lang === item.id}
                          className={lang === item.id ? 'on' : undefined}
                          onClick={() => {
                            setLang(item.id)
                            setLangOpen(false)
                          }}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                type="button"
                className="menu-btn"
                aria-expanded={open}
                aria-label={open ? t.nav.close : t.nav.menu}
                onClick={() => setOpen((value) => !value)}
              >
                <span className="sr-only">{open ? t.nav.close : t.nav.menu}</span>
                {open ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <Logo />
            <p>{t.footer.blurb}</p>
            <a className="foot-phone" href={`tel:${shop.phoneTel}`}>
              {shop.phoneDisplay}
            </a>
            <p className="quiet">{t.common.brandNote}</p>
          </div>
          <div>
            <h2>{t.footer.visit}</h2>
            <ul>
              {address[lang].map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>{t.footer.hours}</li>
              <li>
                {t.common.cr} <span className="num">{shop.cr}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2>{t.footer.browse}</h2>
            <ul>
              {categoryIds.map((id) => (
                <li key={id}>
                  <Link to={`/collection?cat=${id}`}>{t.categories[id]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t.nav.contact}</h2>
            <ul>
              <li>
                <a href={mapsSearch} target="_blank" rel="noreferrer">
                  {t.visit.maps}
                </a>
              </li>
              <li>
                <a href={mapsDirections} target="_blank" rel="noreferrer">
                  {t.visit.directions}
                </a>
              </li>
              <li>
                <Link to="/sell">{t.nav.sell}</Link>
              </li>
              <li>
                <Link to="/contact">{t.nav.contact}</Link>
              </li>
              <li>
                <Link to="/services">{t.plus.services}</Link>
              </li>
              <li>
                <Link to="/areas">{t.plus.areasEyebrow}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap foot-base">
          <p>
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p>{t.footer.credit}</p>
          <p className="legal-links">
            <Link to="/privacy">{t.plus.privacy}</Link>
            <Link to="/terms">{t.plus.terms}</Link>
          </p>
        </div>
      </footer>

      <button type="button" className="wa-fab" aria-label={`${t.nav.whatsapp} ${shop.phoneDisplay}`} onClick={() => openWhatsApp(t.waHello)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 3.1A8.8 8.8 0 0 0 4.3 16.2L3.2 20.8l4.7-1.2A8.8 8.8 0 1 0 12 3.1Zm4.7 12.5c-.2.6-1.1 1.1-1.6 1.1-.4 0-.9.1-2.8-.7-2.3-1-3.8-3.3-3.9-3.4-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.6.7 2 .7 2.1.1.2 0 .4-.1.5l-.3.4c-.1.2-.3.3-.1.6.2.3.7 1.2 1.5 1.9 1 .9 1.9 1.2 2.2 1.3.3.1.4 0 .6-.2l.5-.6c.2-.2.3-.2.5-.1l2 .9c.2.1.4.2.4.4.1.2 0 .7-.2 1.1Z" />
        </svg>
        <span className="wa-label">{t.nav.whatsapp}</span>
        <span className="wa-num">{shop.phoneDisplay}</span>
      </button>
    </div>
  )
}

export function PageHero({ eyebrow, title, lede, video = true, videoSrc = heroVideo, poster = heroPoster }) {
  return (
    <header className={video ? 'page-hero has-video' : 'page-hero'}>
      {video && (
        <>
          <VideoBackdrop src={videoSrc} poster={poster} />
          <div className="hero-shade" />
        </>
      )}
      <div className="wrap hero-copy">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </header>
  )
}

export function BuyCta() {
  const { lang, t } = useI18n()
  const h = homeFor(lang)
  return (
    <section className="buy-cta">
      <div className="wrap">
        <p className="eyebrow">{h.ctaEyebrow}</p>
        <h2>{h.ctaTitle}</h2>
        <p>{h.ctaText}</p>
        <div className="hero-actions">
          <a className="btn btn-solid" href={`tel:${shop.phoneTel}`}>
            {h.call}
          </a>
          <Link className="btn btn-mint" to="/sell">
            {h.offer}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function PieceCard({ piece }) {
  const { lang, t } = useI18n()
  const copy = pieceCopy(piece, lang)
  return (
    <Link to="/sell" className="piece-card">
      <div className="piece-media">
        <img
          src={piece.image}
          alt={copy.name}
          onError={(event) => {
            event.currentTarget.src = '/images/shop-front.jpg'
          }}
        />
      </div>
      <div className="piece-meta">
        <span>
          {t.categories[piece.category]} · {piece.image.includes('/floor-') ? t.common.fromFloor : t.common.example}
        </span>
        <h3>{copy.name}</h3>
        <strong>{formatQar(piece.price, lang)}</strong>
        <em>{t.common.guide}</em>
      </div>
    </Link>
  )
}

export function MapEmbed() {
  const { lang, t } = useI18n()
  const mapLang = { en: 'en', ar: 'ar', bn: 'bn', hi: 'hi' }[lang] || 'en'
  const src = `https://maps.google.com/maps?q=${encodeURIComponent('New Souq Al Haraj Doha Qatar')}&z=15&hl=${mapLang}&output=embed`
  return <iframe className="map-frame" title={t.visit.mapTitle} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
}

export function Marquee({ labels }) {
  const { t } = useI18n()
  const items = labels?.length ? labels : categoryIds.map((id) => t.categories[id])
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {items.map((label) => (
              <span key={`${copy}-${label}`}>
                {label}
                <i>·</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Disclaimer() {
  const { t } = useI18n()
  return <p className="disclaimer">{t.common.disclaimer}</p>
}

export function SwipeSlides({ items, label }) {
  if (!items?.length) return null
  return (
    <div className="swipe" role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="swipe-track">
        {items.map((item, index) => {
          const body = (
            <>
              <img src={item.image} alt={item.alt || ''} />
              <div className="swipe-copy">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </>
          )
          if (item.to) {
            return (
              <Link className="swipe-slide" to={item.to} key={item.title}>
                {body}
              </Link>
            )
          }
          return (
            <article className="swipe-slide" key={item.title}>
              {body}
            </article>
          )
        })}
      </div>
    </div>
  )
}
