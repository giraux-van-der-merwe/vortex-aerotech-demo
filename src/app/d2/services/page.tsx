'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plane, Truck, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import D2Footer from '@/components/d2/D2Footer'
import ScrollReveal from '@/components/shared/ScrollReveal'

const timelineMilestones = [
  { num: '01', title: 'Initial Consultation', desc: 'We meet on your farm, assess your requirements, and determine the right product, rate, and timing for your situation.' },
  { num: '02', title: 'Flight Plan & Permitting', desc: 'GPS flight paths are mapped, all SACAA notifications are filed, and equipment is calibrated to your specified application rate.' },
  { num: '03', title: 'Aerial Application', desc: 'DJI T100 drones execute the planned flight paths with precision — every pass documented, every hectare covered.' },
  { num: '04', title: 'Compliance Reporting', desc: 'Full flight logs, GPS coverage data, product usage records, and SACAA compliance documentation delivered within 24 hours.' },
]

export default function D2Services() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, amount: 0.2 })

  return (
    <main style={{ background: '#F5F3F0', fontFamily: 'var(--font-rethink)' }}>

      {/* ── HERO ── */}
      <section className="pt-24 pb-16" style={{ background: '#F5F3F0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs mb-4" style={{ color: '#8B9271' }}>
              <Link href="/d2" style={{ color: '#8B9271' }}>Home</Link> / Services
            </p>
            <h1
              className="font-semibold mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#181818', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              Our Services
            </h1>
            <p className="text-base" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>
              Precision aerial application for every crop need — from first-pass pesticides to final-season lime. Every job delivered by licensed, certified professionals.
            </p>
          </div>
          <div className="rounded-2xl aspect-video" style={{ background: 'linear-gradient(135deg, #8B9271, #FFF3A3)' }} />
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="font-semibold mb-6" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', color: '#181818', letterSpacing: '-0.02em' }}>
              Precision Coverage. Every Hectare. Every Time.
            </h2>
            <p className="text-base mb-4" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>
              Vortex Aerotech operates two core services — crop spraying and granular spreading — both delivered with the same commitment to precision, compliance, and on-time execution. Our DJI T100 fleet and NIC 35 support trailers allow us to mobilise quickly and cover large areas efficiently.
            </p>
            <p className="text-base" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>
              Whether you need a same-week fungicide application or a planned pre-season fertiliser spreading, our team is structured to deliver without delays or compromises on quality.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <blockquote className="p-6 rounded-2xl" style={{ background: '#F5F3F0' }}>
              <p
                className="text-xl italic mb-4"
                style={{ fontFamily: 'var(--font-playfair)', color: '#8B9271', lineHeight: '1.6' }}
              >
                &ldquo;When the spray window opens, you need to be ready — not waiting for a ground rig to dry out enough to enter the field.&rdquo;
              </p>
              <p className="text-sm font-semibold" style={{ color: '#4E4E4E' }}>— Vortex Aerotech Field Team</p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CROP SPRAYING DETAIL ── */}
      <section className="py-24" style={{ background: '#F5F3F0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#8B9271' }}>Service 01</p>
            <h3 className="font-semibold mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#181818', letterSpacing: '-0.02em' }}>Crop Spraying</h3>
            <p className="text-base mb-4" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>
              Liquid applications demand consistent delivery. Our T100 drones maintain a fixed spray height above the canopy, ensuring uniform droplet distribution regardless of terrain changes beneath — something ground equipment simply cannot match on uneven land.
            </p>
            <p className="text-base mb-6" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>
              Every spray job is calibrated to your specified litres per hectare, cross-checked before flight, and documented in full. You receive coverage maps showing exactly where product was applied and at what rate.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {['Pesticide application', 'Foliar nutrition', 'Fungicide treatment', 'Herbicide application', 'Plant growth regulator application'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base" style={{ color: '#4E4E4E' }}>
                  <CheckCircle size={18} style={{ color: '#FFF3A3', background: '#3A4526', borderRadius: '50%', padding: 2 }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-5 rounded-xl" style={{ background: '#fff', borderLeft: '3px solid #FFF3A3' }}>
              <p className="text-sm font-semibold mb-1" style={{ color: '#181818' }}>Suitable for</p>
              <p className="text-sm" style={{ color: '#4E4E4E' }}>Maize, wheat, soya, sunflower, sorghum, sugarcane, citrus, deciduous fruit, vineyards, potatoes, and most commercial grain crops.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} direction="right">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ background: 'linear-gradient(135deg, #8B9271, #F5F3F0)' }}>
              <div className="w-full h-full flex items-center justify-center">
                <Plane size={80} className="text-white opacity-20" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GRANULAR SPREADING DETAIL ── */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ background: 'linear-gradient(135deg, #FFF3A3, #8B9271)' }}>
              <div className="w-full h-full flex items-center justify-center">
                <Truck size={80} className="text-white opacity-20" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#8B9271' }}>Service 02</p>
            <h3 className="font-semibold mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#181818', letterSpacing: '-0.02em' }}>Granular Spreading</h3>
            <p className="text-base mb-4" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>
              Uneven granular application is one of the most costly inefficiencies in commercial farming. Inconsistent fertiliser coverage produces inconsistent yields — and traditional mechanical spreaders amplify that inconsistency with every change in ground speed, terrain, or operator fatigue.
            </p>
            <p className="text-base mb-6" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>
              Aerial spreading removes those variables. GPS-planned paths, constant air speed, and calibrated spreader systems deliver a consistent product distribution from the first metre to the last.
            </p>
            <ul className="flex flex-col gap-3 mb-6">
              {['Fertilizer application', 'Lime spreading', 'Cover crop seeding', 'Granular weedicide spreading', 'Micro-nutrient top dressing'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base" style={{ color: '#4E4E4E' }}>
                  <CheckCircle size={18} style={{ color: '#FFF3A3', background: '#3A4526', borderRadius: '50%', padding: 2 }} />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ── EQUIPMENT CARDS ── */}
      <section className="py-24" style={{ background: '#8B9271' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4 text-white/60">Equipment & Team</p>
            <h2 className="font-semibold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
              Precision from the Ground Up
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Plane, title: 'DJI T100 Agricultural Drone', specs: ['100-litre liquid tank', 'Up to 100ha/hr coverage', '16-metre spray width', 'Terrain-following flight', 'Obstacle avoidance radar', 'SACAA approved operations'] },
              { Icon: Truck, title: 'NIC 35 Support Trailer', specs: ['Twin 500L mixing silos', 'Rapid drone reload system', 'On-site product mixing', 'Liquid & granular capable', 'Full calibration equipment', 'Self-contained field unit'] },
              { Icon: Users, title: 'Certified Flight Crew', specs: ['SACAA Remote Pilot Licence', 'POC Aerial Applicator Cert', 'Full compliance training', 'Experienced field operators', 'Insurance covered', 'Documentation specialists'] },
            ].map(({ Icon, title, specs }) => (
              <ScrollReveal key={title}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <Icon size={28} className="mb-5" style={{ color: '#8B9271' }} />
                  <h4 className="font-semibold text-lg mb-5" style={{ color: '#181818' }}>{title}</h4>
                  <ul className="flex flex-col gap-2">
                    {specs.map((s) => (
                      <li key={s} className="text-sm flex items-center gap-2" style={{ color: '#4E4E4E' }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FFF3A3', border: '1.5px solid #3A4526' }} />
                        {s}
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
      <section className="py-24" style={{ background: '#F5F3F0' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#8B9271' }}>Process</p>
            <h2 className="font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#181818', letterSpacing: '-0.02em' }}>From Call to Coverage</h2>
          </div>

          <div ref={lineRef} className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px" style={{ background: '#DDD9D3' }}>
              <motion.div
                className="w-full"
                style={{ background: '#8B9271' }}
                initial={{ height: '0%' }}
                animate={{ height: lineInView ? '100%' : '0%' }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="flex flex-col gap-12">
              {timelineMilestones.map((m, i) => (
                <ScrollReveal key={m.num} delay={i * 0.1}>
                  <div className="flex gap-6 items-start">
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 border-2 z-10 -ml-4"
                      style={{ background: '#fff', borderColor: '#FFF3A3', color: '#3A4526', fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.1 }}
                    >
                      {m.num}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-base mb-2" style={{ color: '#181818' }}>{m.title}</h4>
                      <p className="text-sm" style={{ color: '#4E4E4E', lineHeight: '1.7' }}>{m.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#FFF3A3' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#181818', letterSpacing: '-0.02em' }}>
                Let&apos;s Discuss Your Application.
              </h2>
              <p className="text-base mb-6" style={{ color: '#3A4526', opacity: 0.75 }}>Fill in your details and we&apos;ll come back to you with a quote within the day.</p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 text-sm rounded-xl border outline-none" style={{ borderColor: '#DDD9D3', background: '#fff' }} />
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 text-sm rounded-xl border outline-none" style={{ borderColor: '#DDD9D3', background: '#fff' }} />
              <textarea rows={3} placeholder="Tell us about your application..." className="w-full px-4 py-3 text-sm rounded-xl border outline-none resize-none" style={{ borderColor: '#DDD9D3', background: '#fff' }} />
              <button type="submit" className="text-base font-bold px-8 py-4 rounded-[20px] transition-all duration-200" style={{ background: '#3A4526', color: '#FFF3A3' }}>
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <D2Footer />
    </main>
  )
}
