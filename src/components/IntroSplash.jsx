import { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './IntroSplash.module.css'

const NAME = 'CHARLES OGUNSANYA'

export default function IntroSplash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className={styles.splash}
      onClick={onDone}
      exit={{ opacity: 0 }}
    >
      {/* sweeping color bars */}
      {['#4fc3ff', '#ff2e3f', '#ff4fa3', '#a36bff', '#ffd166'].map((c, i) => (
        <motion.div
          key={c}
          className={styles.bar}
          style={{ background: c, top: `${8 + i * 19}%` }}
          initial={{ x: '-110vw', skewY: -6 }}
          animate={{ x: '110vw', skewY: -6 }}
          transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.83, 0, 0.17, 1] }}
        />
      ))}

      <div className={styles.center}>
        <motion.div
          className={styles.name}
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.035, delayChildren: 0.55 } } }}
        >
          {NAME.split('').map((ch, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, rotate: -8, scale: 1.4 },
                show: { opacity: 1, y: 0, rotate: 0, scale: 1, transition: { type: 'spring', damping: 14 } },
              }}
            >
              {ch === ' ' ? ' ' : ch}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        >
          SOFTWARE ENGINEER&nbsp;&nbsp;//&nbsp;&nbsp;VIDEO EDITOR&nbsp;&nbsp;//&nbsp;&nbsp;ILLUSTRATOR
        </motion.p>
        <motion.p
          className={styles.skip}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.9 }}
        >
          click to skip
        </motion.p>
      </div>
    </motion.div>
  )
}
