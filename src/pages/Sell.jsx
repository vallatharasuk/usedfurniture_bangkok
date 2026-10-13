import { useState } from 'react'
import { categoryIds, shop } from '../data'
import { homeFor } from '../homeCopy'
import { useI18n, usePageTitle } from '../context'
import { BuyCta, VideoBackdrop } from '../components'
import { openWhatsApp, waUrl } from '../whatsapp'

export default function Sell() {
  const { lang, t } = useI18n()
  const h = homeFor(lang)
  const [sent, setSent] = useState(false)
  usePageTitle(t.sell.title, t.seo.sellDescription)

  function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const lines = [
      t.sell.hello,
      `${t.sell.name}: ${data.get('name')}`,
      `${t.sell.phone}: ${data.get('phone')}`,
      `${t.sell.type}: ${data.get('category')}`,
      `${t.sell.area}: ${data.get('area')}`,
      `${t.sell.condition}: ${data.get('condition')}`,
      `${t.sell.note}: ${data.get('note')}`,
    ]
    openWhatsApp(lines.join('\n'))
    setSent(true)
  }

  return (
    <>
      <section className="buy-hero sell-hero">
        <VideoBackdrop />
        <div className="buy-hero-shade" />
        <div className="buy-hero-copy">
          <p className="buy-pin">{t.sell.eyebrow}</p>
          <h1>
            {t.sell.title}
            <span className="buy-h1-ar">{h.secondLine}</span>
          </h1>
          <p className="lede">{t.sell.lede}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={`tel:${shop.phoneTel}`}>
              {h.call}
            </a>
            <a className="btn btn-mint" href={waUrl(t.waHello)} target="_blank" rel="noreferrer">
              {t.nav.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.sell.stepsTitle}</h2>
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

      <section className="section alt">
        <div className="wrap sell-grid">
          <div>
            <h2>{t.sell.formTitle}</h2>
            <p className="lede dark">{t.plus.flowLede}</p>
          </div>
          <form className="form-card" onSubmit={onSubmit}>
            <div className="form-grid">
              <label>
                {t.sell.name}
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                {t.sell.phone}
                <input name="phone" required autoComplete="tel" inputMode="tel" />
              </label>
              <label>
                {t.sell.type}
                <select name="category" required defaultValue="">
                  <option value="" disabled>
                    {t.sell.choose}
                  </option>
                  {categoryIds.map((id) => (
                    <option key={id} value={t.categories[id]}>
                      {t.categories[id]}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                {t.sell.area}
                <input name="area" required placeholder={t.sell.areaPh} />
              </label>
              <label>
                {t.sell.condition}
                <select name="condition" required defaultValue={t.sell.conditions[1]}>
                  {t.sell.conditions.map((condition) => (
                    <option key={condition}>{condition}</option>
                  ))}
                </select>
              </label>
              <label className="full">
                {t.sell.note}
                <textarea name="note" required placeholder={t.sell.notePh} />
              </label>
            </div>
            <button className="btn btn-wa" type="submit">
              {t.sell.submit}
            </button>
            {sent && <p className="sent">{t.common.sent}</p>}
          </form>
        </div>
      </section>
      <BuyCta />
    </>
  )
}
