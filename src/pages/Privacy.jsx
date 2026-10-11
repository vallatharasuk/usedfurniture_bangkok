import { useI18n, usePageTitle } from '../context'
import { PageHero } from '../components'

export default function Privacy() {
  const { t } = useI18n()
  usePageTitle(t.plus.privacyPage.title, t.seo.privacyDescription)

  return (
    <>
      <PageHero eyebrow={t.plus.privacyPage.eyebrow} title={t.plus.privacyPage.title} lede={t.plus.privacyPage.lede} />
      <section className="section tight">
        <div className="wrap prose legal">
          {t.plus.privacyPage.blocks.map((block) => (
            <p key={block}>{block}</p>
          ))}
        </div>
      </section>
    </>
  )
}
