import { Code2, MousePointer2, Palette, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'SaaS Dashboard',
    desc: 'Design system + responsive dashboard with interactive charts and micro-interactions.',
    tags: ['UI/UX', 'Design System', 'Framer Motion'],
  },
  {
    title: 'E-commerce Experience',
    desc: 'High-conversion product pages with 3D previews, accessibility and performance in mind.',
    tags: ['Web Dev', 'Accessibility', '3D'],
  },
  {
    title: 'Portfolio Revamp',
    desc: 'Playful personal site with Spline 3D scenes, glassmorphism, and scroll animations.',
    tags: ['Brand', 'Motion', 'Spline'],
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="mt-2 text-blue-200/80">A mix of product design and front-end engineering.</p>
          </div>
          <Sparkles className="hidden sm:block text-blue-300/70" />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-blue-400/30 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 ring-1 ring-white/20" />
                <h3 className="font-semibold text-white tracking-tight">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-100/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-blue-200/80">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Stat icon={<Palette size={16} />} label="Design Systems" value="12+" />
          <Stat icon={<Code2 size={16} />} label="Web Projects" value="30+" />
          <Stat icon={<MousePointer2 size={16} />} label="Prototypes" value="50+" />
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-blue-300/80">{icon}</div>
      <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
      <div className="text-sm text-blue-200/70">{label}</div>
    </div>
  )
}
