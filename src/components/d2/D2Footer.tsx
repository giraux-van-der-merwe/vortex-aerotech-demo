import Link from 'next/link'

export default function D2Footer() {
  return (
    <footer style={{ background: '#2C2C2A', fontFamily: 'var(--font-rethink)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <p className="text-xl font-semibold text-white mb-4">VORTEX AEROTECH</p>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Precision agricultural drone services across South Africa. SACAA licensed, POC certified, DJI T100 equipped.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: '#8B9271' }}>Links</h4>
            <ul className="flex flex-col gap-3">
              {[['Home', '/d2'], ['Services', '/d2/services'], ['Contact', '/d2/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF3A3')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] mb-5" style={{ color: '#8B9271' }}>Contact</h4>
            <ul className="flex flex-col gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <li>Hein: +27 84 555 8144</li>
              <li>Henk: +27 78 915 8120</li>
              <li><a href="mailto:admin@vortexaerotech.co.za" style={{ color: 'rgba(255,255,255,0.5)' }}>admin@vortexaerotech.co.za</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>© {new Date().getFullYear()} Vortex Aerotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
