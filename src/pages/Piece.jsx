import { Link, useParams } from 'react-router-dom'
import { formatQar, pieceCopy, pieces } from '../data'
import { useI18n, usePageTitle } from '../context'
import { Disclaimer, Photo, PieceCard } from '../components'
import { openWhatsApp } from '../whatsapp'
import NotFound from './NotFound'

export default function Piece() {
  const { slug } = useParams()
  const piece = pieces.find((item) => item.slug === slug)
  if (!piece) return <NotFound />
  return <PieceView piece={piece} />
}

function PieceView({ piece }) {
  const { lang, t } = useI18n()
  const copy = pieceCopy(piece, lang)
  usePageTitle(copy.name, t.seo.piece(copy.name, copy.note))
  const same = pieces.filter((item) => item.slug !== piece.slug && item.category === piece.category)
  const more = same.length ? same : pieces.filter((item) => item.slug !== piece.slug).slice(0, 3)

  return (
    <section className="section piece-page">
      <div className="wrap">
        <Link className="crumb" to="/collection">
          {t.common.back}
        </Link>
        <div className="piece-layout">
          <div className="piece-media large">
            <Photo src={piece.image} alt={copy.name} />
          </div>
          <div className="piece-detail">
            <p className="eyebrow dark">{t.categories[piece.category]}</p>
            <h1>{copy.name}</h1>
            <p className="price">
              {formatQar(piece.price, lang)}
              <small>{t.common.guide}</small>
            </p>
            <p className="lede dark">{copy.note}</p>
            <button type="button" className="btn btn-wa" onClick={() => openWhatsApp(t.enquire(copy.name))}>
              {t.piece.enquire}
            </button>
            <Disclaimer />
          </div>
        </div>
        <div className="section-head">
          <h2>{same.length ? t.common.related : t.common.more}</h2>
        </div>
        <div className="piece-grid">
          {more.map((item) => (
            <PieceCard key={item.slug} piece={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
