import { useState } from 'react'
import type { CSSProperties } from 'react'
import { kampanja } from './kampanjat'

/**
 * Kumppanin määräaikainen kampanja nauhana perusmainoksen tai ostonapin yhteydessä.
 *
 * Tiedot, lähteet ja aikaikkuna: shared/ads/kampanjat.ts. Nauha palauttaa null, kun mainostajalla
 * ei ole voimassa olevaa kampanjaa lukijan kielellä: silloin mainos on tavallinen perusmainos.
 * Päätös tehdään renderöinnin hetkellä, joten kampanja alkaa ja loppuu ilman julkaisua.
 *
 * - `href` (valinnainen): nauhan oma linkki kampanjan sivulle. Anna se vain, kun nauha EI ole
 *   kokonaan linkkinä olevan kortin sisällä (linkkiä ei saa olla linkin sisällä) ja kampanjalla
 *   on oma sivu (`landing`). Rakenna href sijoituksessa: withKampanja(spec.linkFor(sid), key, lang).
 * - `tone`: 'light' vaalealla pohjalla, 'dark' tummalla lasilla.
 * - Kaikki mitat ja värit ovat inline-tyylejä, koska Tailwind ei aina lue shared/-hakemistoa
 *   sivustojen buildeissa (sama syy kuin AdUnitissa).
 * Ehdot ovat kokonaisia virkkeitä, joten ne ovat leipätekstiä: 16 px ja muste vähintään /75
 * (lv_permanent_rules §33, gate:kuvateksti).
 */
export default function KampanjaNauha({
  mainostaja,
  lang,
  tone = 'light',
  href,
  onLinkClick,
  marginTop,
  marginBottom,
  now,
}: {
  /** AdSpec.key tai kumppanin tunniste, sama kuin kampanjat.ts:n `mainostaja`. */
  mainostaja?: string
  lang?: string
  tone?: 'light' | 'dark'
  href?: string
  onLinkClick?: (href: string) => void
  /** Väli yläpuolelle (esim. '1rem'). Nauhan omassa juuressa, jotta tyhjä nauha ei jätä rakoa. */
  marginTop?: string
  marginBottom?: string
  /** Testiä varten; oletus on renderöinnin hetki. */
  now?: number
}) {
  const [renderedAt] = useState(() => now ?? Date.now())
  const k = kampanja(mainostaja, lang, renderedAt)
  const t = k?.teksti[(lang || '').split('-')[0]]
  if (!k || !t) return null

  const dark = tone === 'dark'
  const ink = dark ? '#F9FAFB' : '#0F172A'
  const soft = dark ? 'rgba(249,250,251,0.80)' : 'rgba(15,23,42,0.78)'
  const juuri: CSSProperties = {
    marginTop,
    marginBottom,
    padding: '0.875rem 1rem',
    borderRadius: '1rem',
    textAlign: 'left',
    color: ink,
    background: dark ? 'rgba(255,255,255,0.05)' : '#FFFFFF',
    border: `2px dashed ${dark ? 'rgba(249,250,251,0.28)' : 'rgba(15,23,42,0.20)'}`,
  }
  const linkki = href && k.landing && t.cta ? href : undefined

  return (
    <aside aria-label={t.otsikko} data-kampanja={k.mainostaja} style={juuri}>
      <p style={{ margin: 0, fontSize: '17px', fontWeight: 700, lineHeight: 1.3, color: ink, textWrap: 'balance' }}>
        {t.otsikko}
      </p>
      {t.rivit && (
        <ul style={{ listStyle: 'none', margin: '0.625rem 0 0', padding: 0 }}>
          {t.rivit.map((r) => (
            <li
              key={r}
              style={{
                // balance: rivi jakautuu tasan eikä jätä normaalihintaa yksin kolmannelle riville puhelimella.
                fontSize: '16px', lineHeight: 1.4, color: ink, padding: '0.375rem 0', textWrap: 'balance',
                borderTop: `1px solid ${dark ? 'rgba(249,250,251,0.12)' : 'rgba(15,23,42,0.10)'}`,
              }}
            >
              {r}
            </li>
          ))}
        </ul>
      )}
      <p style={{ margin: '0.625rem 0 0', fontSize: '16px', lineHeight: 1.5, color: soft, textWrap: 'pretty' }}>{t.ehdot}</p>
      {linkki && (
        <a
          href={linkki}
          target="_blank"
          rel="sponsored nofollow noopener"
          data-kampanja-linkki=""
          onClick={() => onLinkClick?.(linkki)}
          style={{
            display: 'inline-flex', alignItems: 'center', minHeight: '44px', marginTop: '0.375rem',
            fontSize: '16px', fontWeight: 700, color: ink, textDecoration: 'underline', textUnderlineOffset: '4px',
          }}
        >
          {t.cta}
          <span aria-hidden="true" style={{ marginLeft: '0.375rem' }}>→</span>
        </a>
      )}
    </aside>
  )
}
