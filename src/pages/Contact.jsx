import { useState } from 'react'
import { address, hoursFor, mapsSearch, shop } from '../data'
import { useI18n, usePageTitle } from '../context'
import { MapEmbed, PageHero } from '../components'
import { openWhatsApp } from '../whatsapp'

export default function Contact() {
  const { lang, t } = useI18n()
  const [sent, setSent] = useState(false)
  const hours = hoursFor(lang)
  usePageTitle(t.contact.title, t.seo.contactDescription)

  function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    openWhatsApp(
      [t.contact.hello, `${t.contact.name}: ${data.get('name')}`, `${t.contact.phone}: ${data.get('phone')}`, '', data.get('message')].join(
        '\n',
      ),
    )
    setSent(true)
  }

  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} lede={t.contact.lede} />
      <section className="section tight">
        <div className="wrap sell-grid">
          <div className="address-card flat">
            <h2>{t.common.address}</h2>
            <ul>
              {address[lang].map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p>
              <a className="num" href={`tel:${shop.phoneTel}`}>{shop.phoneDisplay}</a>
            </p>
            <p>
              {t.common.hours}: {hours}
            </p>
            <p>
              {t.common.cr} {shop.cr}
            </p>
            <a className="btn btn-line" href={mapsSearch} target="_blank" rel="noreferrer">
              {t.visit.maps}
            </a>
          </div>
          <form className="form-card" onSubmit={onSubmit}>
            <h2>{t.contact.formTitle}</h2>
            <div className="form-grid">
              <label>
                {t.contact.name}
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                {t.contact.phone}
                <input name="phone" required autoComplete="tel" inputMode="tel" />
              </label>
              <label className="full">
                {t.contact.message}
                <textarea name="message" required placeholder={t.contact.messagePh} />
              </label>
            </div>
            <button className="btn btn-wa" type="submit">
              {t.contact.submit}
            </button>
            {sent && <p className="sent">{t.common.sent}</p>}
          </form>
        </div>
        <div className="wrap map-gap">
          <MapEmbed />
        </div>
      </section>
    </>
  )
}
