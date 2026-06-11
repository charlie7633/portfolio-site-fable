import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blip } from '../sfx.js'
import styles from './PageShell.module.css'

/* Shared full-screen page layout: themed accent, giant skewed
   header, back-to-menu chip, scrollable glass content area. */

export default function PageShell({ title, kicker, children }) {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.bgTint} />
      <div className={styles.bigword} aria-hidden="true">{title}</div>

      <motion.div
        className={styles.back}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.45 } }}
      >
        <button
          className="chip"
          onClick={() => { blip('back'); navigate('/') }}
          onMouseEnter={() => blip('hover')}
        >
          <span>◀ MENU</span>
        </button>
      </motion.div>

      <motion.header
        className={styles.header}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
      >
        {kicker && <p className={styles.kicker}>{kicker}</p>}
        <h1 className={styles.title}>{title}</h1>
      </motion.header>

      <motion.main
        className={`${styles.content} scrollable`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
      >
        {children}
      </motion.main>
    </div>
  )
}
