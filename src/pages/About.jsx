import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import PageShell from '../components/PageShell.jsx'
import engineerArt from '../assets/silhouettes/about.png'
import artistArt from '../assets/silhouettes/art.png'
import editorArt from '../assets/silhouettes/socials.png'
import styles from './About.module.css'

/* Encyclopedia / magazine-spread layout — multiple character
   portraits at different sizes, pull-quotes, name + tagline + bio
   blocks, all in one no-scroll view. Inspired by FFXVI's "Party
   People of Valisthea" character-profile spread. */

const ENGINEER = {
  name: 'The Engineer',
  tagline: 'Ready to ship from day one',
  body: `Stack-agnostic software engineering student at Kingston University London (BSc Computer Science, predicted 2:1, graduating June 2026). Builds and iterates fast across JavaScript, Python, and Java — React Native apps, Flask dashboards on live government APIs, security tooling that catches real vulnerabilities. Rebuilt a client's e-commerce architecture with Stripe at 17 (+68% sales traffic).`,
  art: engineerArt,
}

const ARTIST = {
  name: 'The Artist',
  tagline: 'Manga-style linework, shōnen composition',
  body: `Digital illustrator working in character art and manga-style linework — the silhouettes across this site come from the same influences studied here: Tetsuya Nomura, Jen Zee, and classic shōnen panel composition. Posts to @bycharlieboi_ on Instagram.`,
  art: artistArt,
}

const EDITOR = {
  name: 'The Editor',
  tagline: 'Freelance video editor since 2024',
  body: `Produced short-form content and ran Instagram/TikTok campaigns for brands from local restaurants to Coca-Cola and Kingston University. Grew one channel by 3,000 subscribers with a single trending series.`,
  art: editorArt,
}

export default function About() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      if (!bgRef.current) return
      bgRef.current.style.setProperty('--mx', `${e.clientX}px`)
      bgRef.current.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <PageShell
      title="ABOUT ME"
      kicker="ENCYCLOPEDIA // PERSONAL FILE"
      compact
      backgroundLayer={<div ref={bgRef} className={styles.patternReveal} aria-hidden="true" />}
    >
      <div className={styles.spread}>
        <motion.p
          className={styles.dek}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Three roles, one builder — the people behind every project on this site.
        </motion.p>

        <div className={styles.grid}>
          <motion.div
            className={styles.slotLeft}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <figure className={styles.portraitBig}>
              <img src={ENGINEER.art} alt="" />
            </figure>
            <h2 className={styles.name}>{ENGINEER.name}</h2>
            <p className={styles.tagline}>{ENGINEER.tagline}</p>
            <p className={styles.body}>{ENGINEER.body}</p>
          </motion.div>

          <div className={styles.slotCenter}>
            <motion.p
              className={styles.pullQuote}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              “THE SAME EYE FOR COMPOSITION DRIVES HOW I DESIGN INTERFACES.”
            </motion.p>

            <motion.div
              className={styles.charBlock}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <figure className={styles.portraitMed}>
                <img src={ARTIST.art} alt="" />
              </figure>
              <h2 className={styles.name}>{ARTIST.name}</h2>
              <p className={styles.tagline}>{ARTIST.tagline}</p>
              <p className={styles.body}>{ARTIST.body}</p>
            </motion.div>
          </div>

          <motion.div
            className={styles.slotRight}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <figure className={styles.portraitSmall}>
              <img src={EDITOR.art} alt="" />
            </figure>
            <h2 className={styles.name}>{EDITOR.name}</h2>
            <p className={styles.tagline}>{EDITOR.tagline}</p>
            <p className={styles.body}>{EDITOR.body}</p>
          </motion.div>
        </div>

        <div className={styles.fileIndex}>FILE 02 / 06 — ABOUT</div>
      </div>
    </PageShell>
  )
}
