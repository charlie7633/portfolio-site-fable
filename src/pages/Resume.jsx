import PageShell from '../components/PageShell.jsx'
import { blip } from '../sfx.js'
import styles from './Resume.module.css'

/* CV files live in /public: cv-software.pdf (pending) + cv-creative.pdf */

const EXPERIENCE = [
  ['2025', 'DATA ANALYST EXTERN — BEATS BY DRE', 'Analysed 100+ consumer datasets with Python and Excel; presented dashboards and strategic recommendations to leadership.'],
  ['2024–NOW', 'FREELANCE MARKETING & CONTENT CREATOR', 'Short-form content and campaign management for Anars Kitchen, Redrock Burgers, Budgens, Coca-Cola, and Kingston University.'],
  ['2024', 'VIDEO EDITOR — LONDON HUSTLE, K-WISS, MRSPLAYSSTUFF', '500k+ views across client channels; one trending series drove 3,000 new subscribers; trained an assistant editor.'],
  ['2023', 'MARKETING ADVISOR — JV HOTEL', 'Branding and Airbnb service strategy for a boutique hotel in Nigeria; managed customer communications.'],
  ['2021–22', 'WEB DEVELOPER INTERN — USP COLLEGE', 'SEO and performance work; rebuilt a local e-commerce site with secure payment API integration — 68% increase in sales traffic.'],
]

const SKILLS = [
  'Java', 'Python (Pandas, Matplotlib)', 'JavaScript', 'SQL', 'C#', 'HTML/CSS',
  'React / React Native', 'Node.js', 'Flask', 'Appwrite', 'Firebase', 'Git & CI/CD',
  'REST API Design', 'Database Schema Design', 'Excel', 'Figma / UI-UX', 'SEO',
  'Short-form Video Editing', 'Meta Business Suite', 'TikTok Studio',
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
            <span>⬇ VIDEO / MARKETING CV</span>
          </a>
        </div>

        <div className={`glass ${styles.edu}`}>
          <h3>EDUCATION</h3>
          <p><strong>BSc Computer Science — Kingston University London</strong> · 2022–2026 · Predicted 2:1</p>
          <p className={styles.eduSub}>UX & Interface Design · Human-Centred Design · Data Structures & Algorithms</p>
        </div>

        <div className={styles.timeline}>
          {EXPERIENCE.map(([year, role, desc]) => (
            <div key={role} className={`glass ${styles.entry}`}>
              <span className={styles.year}>{year}</span>
              <div>
                <h4>{role}</h4>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.skills}>
          {SKILLS.map((s) => <span key={s} className={styles.skill}>{s}</span>)}
        </div>
      </div>
    </PageShell>
  )
}
