import { useState } from 'react'
import { categoryIds } from '../data'
import { useI18n, usePageTitle } from '../context'
import { PageHero } from '../components'
import { openWhatsApp } from '../whatsapp'

export default function Sell() {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)
  usePageTitle(t.sell.title)

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
      <PageHero eyebrow={t.sell.eyebrow} title={t.sell.title} lede={t.sell.lede} />
      <section className="section tight">
        <div className="wrap sell-grid">
          <div>
            <h2>{t.sell.stepsTitle}</h2>
            <div className="steps">
              {t.sell.steps.map((step, index) => (
                <article key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <form className="form-card" onSubmit={onSubmit}>
            <h2>{t.sell.formTitle}</h2>
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
    </>
  )
}
