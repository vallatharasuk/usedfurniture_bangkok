import { useSearchParams } from 'react-router-dom'
import { categoryIds, formatCount, pieceCopy, pieces } from '../data'
import { dict } from '../i18n'
import { useI18n, usePageTitle } from '../context'
import { Disclaimer, PageHero, PieceCard } from '../components'

export default function Collection() {
  const { lang, t } = useI18n()
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const cat = params.get('cat') ?? 'all'
  const sort = params.get('sort') ?? 'featured'
  usePageTitle(t.collection.title, t.seo.collectionDescription)

  function update(key, value) {
    const next = new URLSearchParams(params)
    if (!value || value === 'all' || value === 'featured') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const filtered = pieces.filter((piece) => {
    if (cat !== 'all' && piece.category !== cat) return false
    const needle = q.trim().toLowerCase()
    if (!needle) return true
    const copies = ['en', 'ar', 'bn', 'hi'].map((code) => pieceCopy(piece, code))
    const hay = [
      ...copies.flatMap((copy) => [copy.name, copy.note]),
      piece.category,
      ...Object.values(dict).map((entry) => entry.categories[piece.category]),
      ...piece.tags,
    ]
      .join(' ')
      .toLowerCase()
    return hay.includes(needle)
  })

  const rank = new Map(pieces.map((piece, index) => [piece.slug, index]))
  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'low') return a.price - b.price
    if (sort === 'high') return b.price - a.price
    return rank.get(a.slug) - rank.get(b.slug)
  })

  return (
    <>
      <PageHero video eyebrow={t.collection.eyebrow} title={t.collection.title} lede={t.collection.lede} />
      <section className="section tight">
        <div className="wrap">
          <form
            className="search light"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <label className="sr-only" htmlFor="collection-search">
              {t.hero.searchLabel}
            </label>
            <input
              id="collection-search"
              value={q}
              placeholder={t.hero.searchPlaceholder}
              onChange={(event) => update('q', event.target.value)}
            />
          </form>
          <div className="toolbar">
            <div className="chips" role="tablist" aria-label={t.collection.title}>
              <button type="button" className={cat === 'all' ? 'chip on' : 'chip'} onClick={() => update('cat', 'all')}>
                {t.collection.all}
              </button>
              {categoryIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  className={cat === id ? 'chip on' : 'chip'}
                  onClick={() => update('cat', id)}
                >
                  {t.categories[id]}
                </button>
              ))}
            </div>
            <label className="sort">
              <span>{t.collection.sortLabel}</span>
              <select value={sort} onChange={(event) => update('sort', event.target.value)}>
                <option value="featured">{t.collection.featured}</option>
                <option value="low">{t.collection.low}</option>
                <option value="high">{t.collection.high}</option>
              </select>
            </label>
          </div>
          <p className="count">
            {formatCount(sorted.length, lang)} {t.collection.shown}
          </p>
          {sorted.length === 0 ? (
            <div className="empty">
              <p>{t.collection.empty}</p>
              <button type="button" className="btn btn-solid" onClick={() => setParams({})}>
                {t.collection.clear}
              </button>
            </div>
          ) : (
            <div className="piece-grid">
              {sorted.map((piece) => (
                <PieceCard key={piece.slug} piece={piece} />
              ))}
            </div>
          )}
          <Disclaimer />
        </div>
      </section>
    </>
  )
}
