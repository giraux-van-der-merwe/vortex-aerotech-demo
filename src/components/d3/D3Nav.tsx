'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function D3Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { label: 'Home', href: '/d3' },
    { label: 'Services', href: '/d3/services' },
    { label: 'Contact', href: '/d3/contact' },
  ]

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-40" style={{ background: '#111110' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <Link href="/d3" className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: '#A8C090' }} />
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-jakarta)', color: '#F0EEE8', letterSpacing: '-0.01em' }}
            >
              VORTEX AEROTECH
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-200 relative"
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  color: pathname === l.href ? '#F0EEE8' : 'rgba(240,238,232,0.6)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F0EEE8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = pathname === l.href ? '#F0EEE8' : 'rgba(240,238,232,0.6)')}
              >
                {l.label}
                {pathname === l.href && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px" style={{ background: '#A8C090' }} />
                )}
              </Link>
            ))}
            <Link
              href="/d3/contact"
              className="text-sm font-bold px-5 py-2.5 rounded transition-all duration-200"
              style={{ background: '#A8C090', color: '#2C4128', fontFamily: 'var(--font-jakarta)', borderRadius: 4 }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#C8B560'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#A8C090'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Get a Quote
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} style={{ color: '#F0EEE8' }}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col px-8 py-10" style={{ background: '#111110' }}>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: '#A8C090' }} />
              <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-jakarta)', color: '#F0EEE8' }}>VORTEX AEROTECH</span>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: '#F0EEE8' }}><X size={28} /></button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-3xl font-bold" style={{ fontFamily: 'var(--font-jakarta)', color: '#F0EEE8' }}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
