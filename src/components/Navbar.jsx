import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 ring-1 ring-white/20 shadow shadow-blue-500/30" />
              <span className="font-semibold tracking-tight text-white group-hover:text-blue-200 transition-colors">Alex Morgan</span>
              <span className="hidden sm:inline text-xs text-blue-300/70 ml-2">UI/UX • Web Dev</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="hidden md:flex items-center gap-3 pl-4 border-l border-white/10">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-200/80 hover:text-white"><Github size={18} /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-blue-200/80 hover:text-white"><Linkedin size={18} /></a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-blue-500 transition-colors"><Mail size={16} /> Hire me</a>
              </div>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-blue-100/90 hover:text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-4 pt-2">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-200/80 hover:text-white"><Github size={18} /></a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-blue-200/80 hover:text-white"><Linkedin size={18} /></a>
                  <a href="#contact" className="ml-auto inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-blue-500 transition-colors"><Mail size={16} /> Hire me</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
