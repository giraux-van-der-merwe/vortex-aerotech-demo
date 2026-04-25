'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plane, Truck, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import D3Footer from '@/components/d3/D3Footer'
import ScrollReveal from '@/components/shared/ScrollReveal'

export default function D3Services() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, amount: 0.2 })

  return (
    <main style={{ fontFamily: 'var(--font-jakarta)' }}>

      {/* ── HERO ── */}
      <section className="pt-24 pb-20" style={{ background: '#111110' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
          <p className="text-xs mb-4" style={{ color: 'rgba(240,238,232,0.3)' }}>
            <Link href="/d3" style={{ color: 'rgba(240,238,232,0.3)' }}>Home</Link> / Services
          </p>
          <h1
            className="font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1.0 }}
          >
            Our Services
          </h1>
          <p className="text-base max-w-xl" style={{ color: 'rgba(240,238,232,0.5)', lineHeight: '1.75' }}>
            Precision aerial application across South Africa — crop spraying, granular spreading, and full compliance documentation on every job.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24" style={{ background: '#F2F0EB' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>What We Offer</p>
          <h2 className="font-bold mb-16" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#2A2A28', letterSpacing: '-0.02em' }}>
            Full-Spectrum Aerial Application
          </h2>

          <div className="flex flex-col divide-y" style={{ borderColor: '#CCCAB8' }}>
            {[
              { num: '01', title: 'Crop Spraying', desc: 'Precision liquid application at consistent, calibrated rates. Our DJI T100 maintains a fixed height above your canopy for uniform droplet distribution — no drift, no gaps, no missed sections.', items: ['Pesticide application', 'Foliar nutrition', 'Fungicide treatment', 'Herbicide application', 'Plant growth regulator application'] },
              { num: '02', title: 'Granular Spreading', desc: 'GPS-programmed granular distribution eliminates the inconsistency of ground equipment. Consistent air speed, calibrated spreader settings, and precision flight paths deliver even distribution from boundary to boundary.', items: ['Granular weedicide spreading', 'Fertilizer application', 'Lime application', 'Cover crop seeding', 'Micro-nutrient top dressing'] },
            ].map((service, i) => (
              <ScrollReveal key={service.num} delay={i * 0.1}>
                <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8" style={{ borderColor: '#CCCAB8' }}>
                  <div>
                    <div className="text-6xl font-extrabold mb-4 leading-none" style={{ color: 'rgba(168,192,144,0.3)' }}>
                      {service.num}
                    </div>
                    <h3 className="font-bold text-xl" style={{ color: '#2A2A28' }}>{service.title}</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-base mb-6" style={{ color: '#6A6A60', lineHeight: '1.75' }}>{service.desc}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#6A6A60' }}>
                          <CheckCircle size={14} style={{ color: '#A8C090', flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CROP SPRAYING DETAIL (DARK) ── */}
      <section className="py-24" style={{ background: '#1a1a18' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>Deep Dive — Service 01</p>
            <h3 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Crop Spraying
            </h3>
            <p className="text-base mb-4" style={{ color: 'rgba(240,238,232,0.6)', lineHeight: '1.75' }}>
              A 2-litre-per-hectare difference in application volume doesn&apos;t sound like much — but across 500 hectares, it&apos;s a thousand litres of product either wasted or under-applied. Our calibration process ensures your specified volume is delivered consistently across your entire field, verified before and logged during every flight.
            </p>
            <p className="text-base mb-6" style={{ color: 'rgba(240,238,232,0.6)', lineHeight: '1.75' }}>
              The DJI T100&apos;s active phased array radar and terrain-following system automatically adjusts flight height to maintain the correct spray distance above the canopy — even across rolling terrain where ground equipment would struggle to maintain consistent coverage.
            </p>
            <div className="p-4 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#A8C090' }}>Suitable crops</p>
              <p className="text-sm" style={{ color: 'rgba(240,238,232,0.5)' }}>Maize, wheat, soya, sunflower, sorghum, sugarcane, citrus, deciduous fruit, vineyards, potatoes, and most commercial grain crops.</p>
            </div>
          </ScrollReveal>

          {/* Spec panel */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="rounded-lg p-6" style={{ background: '#111110', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-6" style={{ color: '#A8C090' }}>DJI T100 Specs</p>
              {[
                ['Tank Capacity', '100 litres'],
                ['Spray Width', '16 metres'],
                ['Coverage Rate', 'Up to 100 ha/hr'],
                ['Application Volume', '1–50 L/ha'],
                ['Spray Height', '1.5–3 m (auto)'],
                ['GPS Accuracy', 'Sub-metre RTK'],
                ['Obstacle Avoidance', 'Active phased array radar'],
                ['Terrain Following', 'Automatic height adjustment'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <span className="text-sm" style={{ color: 'rgba(240,238,232,0.4)' }}>{label}</span>
                  <span className="text-sm font-semibold" style={{ color: '#A8C090' }}>{value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GRANULAR DETAIL (LIGHT) ── */}
      <section className="py-24" style={{ background: '#E8E5DE' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2C4128, #A8C090)' }}>
              <Truck size={80} style={{ color: 'rgba(255,255,255,0.2)' }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>Deep Dive — Service 02</p>
            <h3 className="font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#2A2A28', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Granular Spreading
            </h3>
            <p className="text-base mb-4" style={{ color: '#6A6A60', lineHeight: '1.75' }}>
              Lime application is one of the most important long-term soil investments a farmer makes — and one of the most frequently done poorly. Uneven spreading creates pH hotspots that affect plant establishment for years. Our aerial spreading eliminates the variability that comes with ground equipment on undulating terrain.
            </p>
            <p className="text-base mb-6" style={{ color: '#6A6A60', lineHeight: '1.75' }}>
              For cover crop seeding, aerial distribution allows establishment across standing crops or post-harvest — timing that is impossible with ground equipment and that delivers significantly better soil health outcomes.
            </p>
            <ul className="flex flex-col gap-2">
              {['Granular weedicide spreading', 'Fertilizer application', 'Lime spreading', 'Cover crop seeding', 'Micro-nutrient top dressing'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#6A6A60' }}>
                  <CheckCircle size={14} style={{ color: '#A8C090', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ── EQUIPMENT (DETAILED) ── */}
      <section className="py-24" style={{ background: '#1a1a18' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>Equipment</p>
          <h2 className="font-bold text-white mb-16" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
            What We Bring to Your Field
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Plane, title: 'DJI T100 Agricultural Drone', specs: [['Tank', '100L liquid'], ['Coverage', 'Up to 100ha/hr'], ['Spray Width', '16 metres'], ['Volume Range', '1–50 L/ha'], ['Height Control', 'Auto terrain-follow'], ['GPS', 'Sub-metre RTK'], ['Safety', 'Active obstacle radar'], ['Certification', 'SACAA approved']] },
              { Icon: Truck, title: 'NIC 35 Support Trailer', specs: [['Mixing Silos', 'Twin 500L capacity'], ['Operation', 'Fully self-contained'], ['Reload Time', '<10 min turnaround'], ['Products', 'Liquid & granular'], ['Calibration', 'On-board equipment'], ['Mobility', 'Farm road capable'], ['Mixing', 'On-site prep'], ['Coverage', 'Supports 2 drones']] },
              { Icon: Users, title: 'Certified Flight Crew', specs: [['Licence', 'SACAA RPL'], ['Application', 'POC Certified'], ['Insurance', 'Full coverage'], ['Compliance', 'SACAA documentation'], ['Experience', '6+ years ops'], ['Records', 'Post-flight reports'], ['Assessment', 'Pre-flight site check'], ['Response', 'Same-day mobilisation']] },
            ].map(({ Icon, title, specs }) => (
              <ScrollReveal key={title}>
                <div
                  className="p-6 rounded-lg border transition-all duration-200"
                  style={{ background: '#111110', borderColor: 'rgba(255,255,255,0.08)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#A8C090' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                >
                  <Icon size={24} className="mb-5" style={{ color: '#A8C090' }} />
                  <h4 className="font-bold text-base mb-5 text-white">{title}</h4>
                  <div className="flex flex-col gap-0">
                    {specs.map(([label, value]) => (
                      <div key={label} className="flex justify-between py-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                        <span className="text-xs" style={{ color: 'rgba(240,238,232,0.35)' }}>{label}</span>
                        <span className="text-xs font-semibold" style={{ color: '#A8C090' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ── */}
      <section className="py-20" style={{ background: '#2C4128' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>Certification</p>
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
            Fully Licensed. Fully Documented.
          </h2>
          <p className="text-base mb-10" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.75' }}>
            Every Vortex Aerotech operation is conducted under full SACAA compliance. We hold SACAA Remote Pilot Licences and POC Aerial Applicator Certification — and we provide full documentation after every job. You are covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['SACAA', 'POC Certified', 'DJI Authorised'].map((badge) => (
              <div key={badge} className="w-28 h-28 flex items-center justify-center text-sm font-bold rounded" style={{ border: '1.5px solid #A8C090', color: '#A8C090' }}>
                {badge}
              </div>
            ))}
          </div>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Documentation provided: SACAA compliance reports · GPS coverage maps · Product usage records · Flight logs
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#111110' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(44,65,40,0.4) 0%, transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
            Ready to Start?
          </h2>
          <p className="text-base mb-8" style={{ color: 'rgba(240,238,232,0.5)' }}>
            Contact us today for a same-day quote. We mobilise fast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/d3/contact" className="text-sm font-bold px-8 py-4 rounded transition-all duration-200" style={{ background: '#A8C090', color: '#2C4128', borderRadius: 4 }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#C8B560'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#A8C090'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Get a Quote
            </Link>
            <a href="tel:+27845558144" className="text-sm font-bold px-8 py-4 rounded transition-all duration-200" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#F0EEE8', borderRadius: 4 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#A8C090'; e.currentTarget.style.color = '#A8C090' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#F0EEE8' }}>
              Call Hein: +27 84 555 8144
            </a>
          </div>
        </div>
      </section>

      <D3Footer />
    </main>
  )
}
