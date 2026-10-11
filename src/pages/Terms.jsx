import { useI18n, usePageTitle } from '../context'
import { PageHero } from '../components'

export default function Terms() {
  const { t } = useI18n()
  usePageTitle(t.plus.termsPage.title, t.seo.termsDescription)

  return (
    <>
      <PageHero eyebrow={t.plus.termsPage.eyebrow} title={t.plus.termsPage.title} lede={t.plus.termsPage.lede} />
      <section className="section tight">
        <div className="wrap prose legal">
          {t.plus.termsPage.blocks.map((block) => (
            <p key={block}>{block}</p>
          ))}
        </div>
      </section>
    </>
  )
}
