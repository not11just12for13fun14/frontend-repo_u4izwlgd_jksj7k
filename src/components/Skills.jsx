import { Figma, Code2, Layers, Box, Component } from 'lucide-react'

const skills = [
  { icon: '🎨', title: 'UI/UX', list: ['Wireframes', 'Design Systems', 'Prototyping', 'Accessibility'] },
  { icon: '⚙️', title: 'Frontend', list: ['React', 'Tailwind', 'Framer Motion', 'Spline'] },
  { icon: '🧠', title: 'Process', list: ['Research', 'User Flows', 'Usability', 'A/B Testing'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Skills</h2>
        <p className="mt-2 text-blue-200/80">A hybrid designer-developer toolkit.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-2 font-semibold text-white">{s.title}</h3>
              <ul className="mt-3 text-sm text-blue-100/85 space-y-1.5">
                {s.list.map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400/80" /> {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
