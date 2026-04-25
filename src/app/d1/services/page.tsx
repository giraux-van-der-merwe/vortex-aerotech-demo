'use client'
import { Shield, Zap, Leaf, Award, Plane, Truck, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import D1Footer from '@/components/d1/D1Footer'
import ScrollReveal from '@/components/shared/ScrollReveal'

const timelineSteps = [
  { icon: Shield, title: 'Initial Consultation & Assessment', desc: 'We visit your farm, assess the area, identify obstacles, check wind patterns, and determine the best product and application method for your specific situation.' },
  { icon: Zap, title: 'Flight Planning & Permitting', desc: 'Our team files all required SACAA notifications and plans precision GPS flight paths to ensure complete, overlap-free coverage of your entire field.' },
  { icon: Plane, title: 'On-Site Setup & Application', desc: 'NIC 35 trailers are positioned, product is mixed in our 500L silos to your specifications, and DJI T100 drones begin systematic, GPS-guided aerial application.' },
  { icon: Award, title: 'Post-Application Reporting', desc: 'Full flight logs, GPS coverage maps, product usage records, and SACAA compliance documentation are provided within 24 hours of job completion.' },
]

export default function D1Services() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, amount: 0.2 })

  return (
    <main style={{ background: '#faf9f6', fontFamily: 'var(--font-dm-sans)' }}>

      {/* ── HERO BAND ── */}
      <section className="pt-24 pb-20" style={{ background: '#3f492a' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
          <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Link href="/d1" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link> / Services
          </p>
          <h1
            className="font-extrabold text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', fontFamily: 'var(--font-bricolage)', lineHeight: 1.05 }}
          >
            Our Services
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Precision aerial application for crop spraying and granular spreading — covering every hectare, every time.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-24" style={{ background: '#faf9f6' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-bricolage)', color: '#3f492a', lineHeight: 1.1 }}>
              Precision Where It Counts Most
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#585858' }}>
              At Vortex Aerotech, every service is built around one principle: get the right product to the right place at the right rate — before the window closes. Ground equipment has its place, but when terrain is difficult, soil conditions are soft, or time is critical, aerial application is the only answer that makes agronomic sense.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#585858' }}>
              Our DJI T100 fleet, operated by SACAA licensed pilots and POC certified applicators, delivers consistent, documented results across any crop type and any terrain in South Africa.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-6">
            {[
              { Icon: Shield, title: 'SACAA Licensed', desc: 'All flights comply with South African Civil Aviation Authority requirements.' },
              { Icon: Zap, title: 'High Coverage Rate', desc: 'Up to 100 hectares per hour with the DJI T100 — no other application method comes close.' },
              { Icon: Leaf, title: 'Zero Soil Compaction', desc: 'Aerial application leaves your field structure intact, protecting future productivity.' },
              { Icon: Award, title: 'Full Documentation', desc: 'Flight logs and application records provided after every job for your records.' },
            ].map(({ Icon, title, desc }) => (
              <ScrollReveal key={title}>
                <div className="p-5 rounded-xl border" style={{ borderColor: '#DFDEDC', background: '#fff' }}>
                  <div className="p-2 rounded inline-block mb-3" style={{ background: '#ecf96e' }}>
                    <Icon size={18} style={{ color: '#3f492a' }} />
                  </div>
                  <h5 className="font-bold text-sm mb-1" style={{ color: '#3f492a' }}>{title}</h5>
                  <p className="text-xs leading-relaxed" style={{ color: '#585858' }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CROP SPRAYING ── */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="rounded-xl overflow-hidden aspect-[4/3]" style={{ background: 'linear-gradient(135deg, #3f492a, #bcc79d)' }}>
              <div className="w-full h-full flex items-center justify-center">
                <Plane size={80} className="text-white opacity-20" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: '#ecf96e', background: '#3f492a', display: 'inline-block', padding: '4px 12px' }}>
              Service 01
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontFamily: 'var(--font-bricolage)', color: '#3f492a', lineHeight: 1.1 }}>
              Crop Spraying
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#585858' }}>
              Liquid applications are only as effective as the distribution method. Our DJI T100 drones apply pesticides, fungicides, and foliar nutrients at precise, calibrated rates — with no drift and no missed sections — even in difficult terrain that stops ground rigs in their tracks.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#585858' }}>
              Because we fly at a consistent height and speed, every litre of product is distributed exactly as prescribed. No hot spots, no skips, no waste.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {['Pesticide application', 'Foliar nutrition', 'Fungicide treatment', 'Herbicide application', 'Growth regulator application'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: '#585858' }}>
                  <CheckCircle size={16} style={{ color: '#ecf96e', background: '#3f492a', borderRadius: '50%', padding: 2 }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl" style={{ background: '#faf9f6', borderLeft: '3px solid #ecf96e' }}>
              <p className="text-sm font-bold mb-1" style={{ color: '#3f492a' }}>Suitable crops</p>
              <p className="text-sm" style={{ color: '#585858' }}>Maize, wheat, soya, sunflower, sorghum, sugarcane, citrus, deciduous fruit, vineyards, potatoes, and most commercial crops.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GRANULAR SPREADING ── */}
      <section className="py-24" style={{ background: '#faf9f6' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: '#ecf96e', background: '#3f492a', display: 'inline-block', padding: '4px 12px' }}>
              Service 02
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontFamily: 'var(--font-bricolage)', color: '#3f492a', lineHeight: 1.1 }}>
              Granular Spreading
            </h3>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#585858' }}>
              Granular weedicide, fertiliser, lime, and cover crop seed require consistent, even distribution across the entire field. Uneven application leads to inconsistent plant development, reduced yields, and wasted product. Aerial spreading eliminates operator fatigue, terrain bias, and mechanical inconsistency.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#585858' }}>
              Our T100 units carry granular spreading payloads across your field on precision GPS paths, distributing product at the rate you specify — verified by our calibration process before every flight.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {['Granular weedicide spreading', 'Fertilizer application', 'Lime application', 'Cover crop seeding', 'Micro-nutrient top dressing'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: '#585858' }}>
                  <CheckCircle size={16} style={{ color: '#ecf96e', background: '#3f492a', borderRadius: '50%', padding: 2 }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl" style={{ background: '#fff', borderLeft: '3px solid #ecf96e' }}>
              <p className="text-sm font-bold mb-1" style={{ color: '#3f492a' }}>Suitable applications</p>
              <p className="text-sm" style={{ color: '#585858' }}>Pre-plant fertilisation, post-emergence weedicide, orchard lime spreading, no-till cover crop establishment, and more.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} direction="right">
            <div className="rounded-xl overflow-hidden aspect-[4/3]" style={{ background: 'linear-gradient(135deg, #bcc79d, #3f492a)' }}>
              <div className="w-full h-full flex items-center justify-center">
                <Leaf size={80} className="text-white opacity-20" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── EQUIPMENT SPECS ── */}
      <section className="py-24" style={{ background: '#3f492a' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: '#ecf96e' }}>Equipment & Team</p>
            <h2 className="font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-bricolage)', color: '#fff', lineHeight: 1.1 }}>
              The Hardware Behind Every Hectare
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Plane, title: 'DJI T100 Drone', specs: ['100L liquid tank', '16m spray width', '100ha/hr coverage', 'Obstacle avoidance radar', 'Terrain-following flight', 'GPS precision autopilot'] },
              { Icon: Truck, title: 'NIC 35 Support Trailer', specs: ['Twin 500L mixing silos', 'On-site preparation', 'Rapid drone reload', 'Liquid & granular capable', 'Full calibration equipment', 'Self-contained field unit'] },
              { Icon: Users, title: 'Certified Flight Crew', specs: ['SACAA licensed pilots', 'POC certified applicators', 'Full compliance training', 'Experienced field teams', 'Insurance covered operations', 'Documentation specialists'] },
            ].map(({ Icon, title, specs }) => (
              <ScrollReveal key={title}>
                <div className="p-6 rounded-xl border" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="p-2 rounded inline-block mb-4" style={{ background: 'rgba(236,249,110,0.15)' }}>
                    <Icon size={24} style={{ color: '#ecf96e' }} />
                  </div>
                  <h4 className="font-bold text-white mb-4" style={{ fontFamily: 'var(--font-bricolage)' }}>{title}</h4>
                  <ul className="flex flex-col gap-2">
                    {specs.map((s) => (
                      <li key={s} className="text-sm flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        <span style={{ color: '#ecf96e' }}>·</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24" style={{ background: '#faf9f6' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: '#ecf96e', background: '#3f492a', display: 'inline-block', padding: '4px 12px' }}>Process</p>
            <h2 className="font-bold mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-bricolage)', color: '#3f492a', lineHeight: 1.1 }}>
              What Happens When You Call Us
            </h2>
          </div>

          <div ref={lineRef} className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: '#DFDEDC' }}>
              <motion.div
                className="w-full"
                style={{ background: '#bcc79d' }}
                initial={{ height: '0%' }}
                animate={{ height: lineInView ? '100%' : '0%' }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="flex flex-col gap-12">
              {timelineSteps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <div className="flex gap-8 items-start pl-2">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 z-10"
                      style={{ background: '#faf9f6', borderColor: '#ecf96e' }}
                    >
                      <step.icon size={18} style={{ color: '#3f492a' }} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2" style={{ fontFamily: 'var(--font-bricolage)', color: '#3f492a' }}>{step.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#585858' }}>{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20" style={{ background: '#ecf96e' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-bricolage)', color: '#3f492a', lineHeight: 1.1 }}>
            Ready to Cover More Ground?
          </h2>
          <p className="text-base mb-8" style={{ color: '#3f492a', opacity: 0.75 }}>
            Contact Hein or Henk today to discuss your application needs and get a same-day quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/d1/contact"
              className="text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 transition-all duration-200"
              style={{ background: '#3f492a', color: '#ecf96e' }}
            >
              Get a Quote
            </Link>
            <a
              href="tel:+27845558144"
              className="text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 border-2 transition-all duration-200"
              style={{ borderColor: '#3f492a', color: '#3f492a' }}
            >
              Call Hein: +27 84 555 8144
            </a>
          </div>
        </div>
      </section>

      <D1Footer />
    </main>
  )
}
