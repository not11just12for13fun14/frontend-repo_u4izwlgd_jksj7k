import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-6 sm:p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Let’s build something delightful</h2>
              <p className="mt-2 text-blue-200/80">Tell me about your project, timeline and goals.</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-1 text-sm text-blue-100/85"><Mail size={16} /> hello@alexm.design</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input required placeholder="Name" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
                <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
              </div>
              <input placeholder="Subject" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
              <textarea required placeholder="Message" rows={4} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
              <div className="flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors">
                  <Send size={16} /> Send message
                </button>
                <span className="text-sm text-blue-200/80">{status}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
