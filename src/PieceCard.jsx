import { Link } from 'react-router-dom'
import { formatQar, pieceCopy } from './catalog'
import { Photo } from './components'
import { useI18n } from './context'

export function PieceCard({ piece }) {
  const { lang, t } = useI18n()
  const copy = pieceCopy(piece, lang)
  return (
    <Link to="/sell" className="piece-card">
      <div className="piece-media">
        <Photo
          src={piece.image}
          alt={copy.name}
          loading="lazy"
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
