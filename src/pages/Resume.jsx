import PageShell from '../components/PageShell.jsx'
import { blip } from '../sfx.js'
import styles from './Resume.module.css'

/* Recruiter fast-lane: both CVs downloadable in one click.
   Drop the real PDFs into /public as cv-software.pdf and
   cv-creative.pdf and the buttons just work.
   [PLACEHOLDER HIGHLIGHTS — will be replaced from real CV] */

const HIGHLIGHTS = [
  ['EDUCATION', 'BSc Computer Science — Kingston University, London. Graduating July 2026.'],
  ['ENGINEERING', 'React / React Native, Python, REST APIs, full-stack project work (Acutz, Simplify My Car, Tempest).'],
  ['DATA', 'Beats by Dre data analytics externship — Python, pandas, sentiment analysis, insight presentation.'],
  ['CREATIVE', 'Freelance video editing and digital illustration — short-form content, motion-aware design.'],
]

export default function Resume() {
  return (
    <PageShell title="RESUME" kicker="EQUIPMENT // CREDENTIALS">
      <div className={styles.wrap}>
        <div className={styles.ctas}>
          <a className={`chip ${styles.cta}`} href="/cv-software.pdf" download onMouseEnter={() => blip('hover')} onClick={() => blip('select')}>
            <span>⬇ SOFTWARE ENGINEERING CV</span>
          </a>
          <a className={`chip ${styles.cta}`} href="/cv-creative.pdf" download onMouseEnter={() => blip('hover')} onClick={() => blip('select')}>
            <span>⬇ VIDEO / CREATIVE CV</span>
          </a>
        </div>

        <div className={styles.grid}>
          {HIGHLIGHTS.map(([k, v]) => (
            <div key={k} className={`glass ${styles.card}`}>
              <h3>{k}</h3>
              <p>{v}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
