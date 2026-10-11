import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { address, categoryIds, formatQar, mapsDirections, mapsSearch, shop } from './data'
import { dict } from './i18n'
import { useI18n } from './context'
import { openWhatsApp, waUrl } from './whatsapp'

export function VideoBackdrop({ src = '/video/floor.mp4', poster = '/images/floor-white-bed.jpg' }) {
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
  const { lang } = useI18n()
  return (
    <Link to="/" className="logo">
      <span className="logo-mark">13</span>
      <span className="logo-words">
        <strong>{lang === 'ar' ? 'بانكوك' : 'Bangkok'}</strong>
        <em>{lang === 'ar' ? 'للمفروشات' : 'Furniture'}</em>
      </span>
    </Link>
  )
}

function navClass(isActive) {
  return isActive ? 'active' : undefined
}

export function Layout() {
  const { lang, setLang, t } = useI18n()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

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
        <div className="topbar">
          <div className="wrap topbar-row">
            <p>{t.topbar}</p>
            <a href={`tel:${shop.phoneTel}`}>{shop.phoneDisplay}</a>
          </div>
        </div>
        <div className={`nav ${open ? 'nav-open' : ''}`}>
          <div className="wrap nav-inner">
            <Logo />
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? t.nav.close : t.nav.menu}
            </button>
            <div className="nav-panel">
              <nav className="nav-links" aria-label="Primary">
                <NavLink to="/collection" className={({ isActive }) => navClass(isActive || pathname.startsWith('/collection'))}>
                  {t.nav.buy}
                </NavLink>
                <NavLink to="/sell" className={({ isActive }) => navClass(isActive)}>
                  {t.nav.sell}
                </NavLink>
                <NavLink to="/showroom" className={({ isActive }) => navClass(isActive)}>
                  {t.nav.showroom}
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => navClass(isActive)}>
                  {t.nav.about}
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => navClass(isActive)}>
                  {t.nav.contact}
                </NavLink>
              </nav>
              <div className="nav-tools">
                <button type="button" className="lang" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
                  {lang === 'ar' ? 'EN' : 'عربي'}
                </button>
                <a className="btn btn-wa" href={waUrl(t.waHello)} target="_blank" rel="noreferrer">
                  {t.nav.whatsapp}
                </a>
              </div>
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
            </ul>
          </div>
        </div>
        <div className="wrap foot-base">
          <p>
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p>{t.footer.credit}</p>
        </div>
      </footer>

      <button type="button" className="wa-fab" onClick={() => openWhatsApp(t.waHello)}>
        {t.nav.whatsapp}
        <span>{shop.phoneDisplay}</span>
      </button>
    </div>
  )
}

export function PageHero({ eyebrow, title, lede, video = false, videoSrc, poster }) {
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

export function PieceCard({ piece }) {
  const { lang, t } = useI18n()
  const copy = piece[lang]
  return (
    <Link to={`/collection/${piece.slug}`} className="piece-card">
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
  const src = `https://maps.google.com/maps?q=${encodeURIComponent('New Souq Al Haraj Doha Qatar')}&z=15&hl=${lang === 'ar' ? 'ar' : 'en'}&output=embed`
  return <iframe className="map-frame" title={t.visit.mapTitle} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
}

export function Marquee() {
  const labels = categoryIds.flatMap((id) => [dict.en.categories[id], dict.ar.categories[id]])
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {labels.map((label) => (
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
