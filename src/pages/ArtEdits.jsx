import PageShell from '../components/PageShell.jsx'
import { blip } from '../sfx.js'
import styles from './ArtEdits.module.css'

/* ART: live Instagram profile embed — always shows the current
   state of @bycharlieboi_. (Unofficial IG endpoint; if it ever
   breaks, the fallback link below it still works.)
   EDITS: client roster from the video editing portfolio. */

const CLIENTS = [
  { name: 'COCA-COLA', blurb: 'Short-form campaign content for a global beverage brand.' },
  { name: 'KINGSTON UNIVERSITY', blurb: 'Student-facing content for the university’s official Instagram.' },
  { name: 'LONDON HUSTLE', blurb: 'Delivery-driving content — Uber, Just Eat, Deliveroo. Daily uploads, 500k+ views.' },
  { name: 'K-WISS', blurb: 'E-sports sponsored Tekken competitor and commentator.' },
  { name: 'MRSPLAYSSTUFF', blurb: 'Variety streamer — a trending series drove 3,000 new subscribers.' },
  { name: 'JAELAYED', blurb: 'Tion Wayne-approved Afro hair stylist serving the Afro-Caribbean community.' },
  { name: 'JV HOTELS', blurb: 'Luxury boutique stays in the heart of Nigeria — branding and Airbnb strategy.' },
  { name: 'ANARS KITCHEN · REDROCK · BUDGENS', blurb: 'Restaurant and retail social campaigns across Instagram and TikTok.' },
]

export default function ArtEdits() {
  return (
    <PageShell title="ART & EDITS" kicker="GALLERY // CREATIVE WORK">
      <div className={styles.wrap}>
        <section>
          <h3 className={styles.section}>ART — LIVE FROM THE SKETCHBOOK</h3>
          <div className={styles.igFrame}>
            <iframe
              src="https://www.instagram.com/bycharlieboi_/embed"
              title="Instagram — @bycharlieboi_"
              loading="lazy"
              allowTransparency
            />
          </div>
          <a
            className="chip"
            href="https://www.instagram.com/bycharlieboi_/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => blip('hover')}
            onClick={() => blip('select')}
          >
            <span>FOLLOW @BYCHARLIEBOI_ ↗</span>
          </a>
        </section>

        <section>
          <h3 className={styles.section}>EDITS — CLIENT ROSTER</h3>
          <div className={styles.grid}>
            {CLIENTS.map((c) => (
              <div key={c.name} className={`glass ${styles.tile}`}>
                <span className={styles.client}>{c.name}</span>
                <span className={styles.blurb}>{c.blurb}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}
