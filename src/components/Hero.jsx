import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-10 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_10%_-10%,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_90%_-10%,rgba(34,211,238,0.18),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 xl:col-span-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/80 shadow-sm">
              Available for freelance • Remote friendly
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Alex Morgan
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-blue-100/90">
              UI/UX Designer & Web Developer combining playful interactions with modern design.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10">
                Contact
              </a>
            </div>
            <div className="mt-6 text-xs text-blue-200/70">
              Tech • Portfolio • Interactive • Playful • Modern
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-7 h-[420px] sm:h-[520px] lg:h-[620px] relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 shadow-2xl">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
