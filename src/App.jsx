import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import IntroSplash from './components/IntroSplash.jsx'
import PageTransition from './components/PageTransition.jsx'
import SoundToggle from './components/SoundToggle.jsx'
import MusicWidget from './components/MusicWidget.jsx'
import MainMenu from './pages/MainMenu.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Projects from './pages/Projects.jsx'
import ArtEdits from './pages/ArtEdits.jsx'
import Socials from './pages/Socials.jsx'

export default function App() {
  const location = useLocation()
  const [introDone, setIntroDone] = useState(() => {
    try { return sessionStorage.getItem('intro-seen') === 'true' } catch { return false }
  })

  const finishIntro = () => {
    try { sessionStorage.setItem('intro-seen', 'true') } catch { /* ignore */ }
    setIntroDone(true)
  }

  if (!introDone) return <IntroSplash onDone={finishIntro} />

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition theme="menu"><MainMenu /></PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition theme="about"><About /></PageTransition>
          } />
          <Route path="/resume" element={
            <PageTransition theme="resume"><Resume /></PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition theme="projects"><Projects /></PageTransition>
          } />
          <Route path="/art" element={
            <PageTransition theme="art"><ArtEdits /></PageTransition>
          } />
          <Route path="/socials" element={
            <PageTransition theme="socials"><Socials /></PageTransition>
          } />
        </Routes>
      </AnimatePresence>
      <SoundToggle />
      <MusicWidget />
    </>
  )
}
