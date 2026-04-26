'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function D4Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { label: 'Home', href: '/d4' },
    { label: 'Services', href: '/d4/services' },
    { label: 'Contact', href: '/d4/contact' },
  ]

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-40" style={{ background: '#1E4D2B', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <Link href="/d4">
            <span
              className="text-lg tracking-wide text-white"
              style={{ fontFamily: 'var(--font-source-serif)', fontWeight: 400 }}
            >
              Vortex Aerotech
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-150 relative pb-0.5"
                style={{
                  fontFamily: 'var(--font-inter)',
                  color: pathname === l.href ? '#fff' : 'rgba(255,255,255,0.7)',
                  borderBottom: pathname === l.href ? '1px solid #C49A2A' : '1px solid transparent',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderBottomColor = '#C49A2A' }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = pathname === l.href ? '#fff' : 'rgba(255,255,255,0.7)'
                  e.currentTarget.style.borderBottomColor = pathname === l.href ? '#C49A2A' : 'transparent'
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/d4/contact"
              className="text-xs font-semibold uppercase tracking-[0.08em] px-5 py-2.5 transition-colors duration-150"
              style={{ background: '#fff', color: '#1E4D2B', fontFamily: 'var(--font-inter)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#F4F6F3' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff' }}
            >
              Request a Quote
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down */}
      {open && (
        <div className="fixed top-24 left-0 right-0 z-40 border-t" style={{ background: '#1E4D2B', borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <span className="text-white/50 text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-inter)' }}>Menu</span>
            <button onClick={() => setOpen(false)} className="text-white/60"><X size={18} /></button>
          </div>
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-sm border-b transition-colors"
                style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
