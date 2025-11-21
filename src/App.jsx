import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* Background grid and glow */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(1000px_500px_at_10%_-10%,rgba(56,189,248,0.18),transparent),radial-gradient(600px_300px_at_90%_-10%,rgba(99,102,241,0.18),transparent)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.04),transparent)] [background-size:32px_1px] [mask-image:radial-gradient(closest-side,black,transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-blue-300/70 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Alex Morgan</span>
          <span>Crafted with love, motion, and clean code.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
