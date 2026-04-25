'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DirectionSwitcher() {
  const pathname = usePathname()
  const active = pathname.startsWith('/d1') ? 1 : pathname.startsWith('/d2') ? 2 : pathname.startsWith('/d3') ? 3 : 0

  const pills = [
    { num: 1, label: 'D1', href: '/d1', color: '#ecf96e', textColor: '#3f492a' },
    { num: 2, label: 'D2', href: '/d2', color: '#FFF3A3', textColor: '#3A4526' },
    { num: 3, label: 'D3', href: '/d3', color: '#A8C090', textColor: '#2C4128' },
  ]

  return (
    <div style={{ background: '#1a1a1a' }} className="flex items-center justify-center gap-2 py-2 px-4 z-50 relative">
      <span className="text-white/40 text-xs mr-2 tracking-widest uppercase">Direction</span>
      {pills.map((p) => (
        <Link
          key={p.num}
          href={p.href}
          style={
            active === p.num
              ? { background: p.color, color: p.textColor }
              : { background: 'transparent', color: 'rgba(255,255,255,0.6)' }
          }
          className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/20 transition-all duration-200 hover:border-white/50"
        >
          {p.label}
        </Link>
      ))}
    </div>
  )
}
