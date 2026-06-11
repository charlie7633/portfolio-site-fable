import { useEffect, useRef, useState } from 'react'
import styles from './MusicWidget.module.css'

/* ============================================================
   MUSIC WIDGET (bottom-left)
   1. BGM: drop a track you have rights to into public/bgm.mp3.
      It starts softly after the visitor's first click (the
      intro splash click counts) — browsers block sound before
      any interaction, so true autoplay is impossible.
   2. Spotify: set SPOTIFY_EMBED_URL to a playlist/track embed
      URL (Share → Embed → copy src) to show the real player.
   ============================================================ */

const SPOTIFY_EMBED_URL = null // e.g. 'https://open.spotify.com/embed/playlist/XXXX'
const BGM_VOLUME = 0.18

export default function MusicWidget() {
  const audioRef = useRef(null)
  const [bgmAvailable, setBgmAvailable] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const audio = new Audio('/bgm.mp3')
    audio.loop = true
    audio.volume = BGM_VOLUME
    audio.addEventListener('canplaythrough', () => setBgmAvailable(true), { once: true })
    audio.addEventListener('error', () => setBgmAvailable(false), { once: true })
    audioRef.current = audio

    const unlock = () => {
      audio.play().then(() => setPlaying(true)).catch(() => { /* still blocked or no file */ })
    }
    window.addEventListener('pointerdown', unlock, { once: true })
    return () => {
      window.removeEventListener('pointerdown', unlock)
      audio.pause()
      audio.src = ''
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) { audio.pause(); setPlaying(false) }
    else { audio.play().then(() => setPlaying(true)).catch(() => {}) }
  }

  if (!bgmAvailable && !SPOTIFY_EMBED_URL) return null

  return (
    <div className={styles.widget}>
      {open && SPOTIFY_EMBED_URL && (
        <iframe
          className={styles.spotify}
          src={SPOTIFY_EMBED_URL}
          width="300"
          height="152"
          frameBorder="0"
          allow="encrypted-media"
          title="Spotify player"
        />
      )}
      <div className={styles.row}>
        {bgmAvailable && (
          <button className="chip" onClick={toggle} aria-pressed={playing}>
            <span>{playing ? '❚❚ BGM' : '▶ BGM'}</span>
          </button>
        )}
        {SPOTIFY_EMBED_URL && (
          <button className="chip" onClick={() => setOpen(!open)}>
            <span>{open ? '✕ SPOTIFY' : '♫ SPOTIFY'}</span>
          </button>
        )}
      </div>
    </div>
  )
}
