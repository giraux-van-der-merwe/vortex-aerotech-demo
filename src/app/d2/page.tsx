'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Target, Shield, Plane, Truck, Users } from 'lucide-react'
import Link from 'next/link'
import D2Footer from '@/components/d2/D2Footer'
import CounterStat from '@/components/shared/CounterStat'
import ScrollReveal from '@/components/shared/ScrollReveal'
import Marquee from '@/components/shared/Marquee'

const equipmentTabs = [
  {
    id: 'aircraft',
    label: 'Aircraft',
    title: 'DJI T100 Agricultural Drone',
    desc: 'The flagship of precision agriculture. The DJI T100 combines a 100-litre spray capacity with an intelligent terrain-following system to deliver consistent, calibrated application across any field profile.',
    specs: ['100-litre liquid payload', 'Up to 100ha/hr coverage', '16-metre effective spray width'],
  },
  {
    id: 'ground',
    label: 'Ground Support',
    title: 'NIC 35 Support Trailer',
    desc: 'Purpose-built for continuous aerial operations. Our NIC 35 trailers carry twin 500-litre mixing silos, enabling on-site product preparation and near-zero turnaround time between flights.',
    specs: ['Twin 500L mixing silos', 'Rapid reload capability', 'Liquid and granular compatible'],
  },
]

const blogPosts = [
  { date: 'March 2025', category: 'Agronomy', title: 'The 48-Hour Fungicide Window: Why Every Hour Costs You', excerpt: 'Disease pressure moves faster than ground equipment. Aerial application closes the intervention gap before your crop pays the price.' },
  { date: 'Feb 2025', category: 'Technology', title: 'How GPS Flight Planning Eliminates Application Overlap', excerpt: 'Sub-metre accuracy on every pass means no double-application, no skip lines, and no wasted product on every job we take.' },
  { date: 'Jan 2025', category: 'Compliance', title: "SACAA Certification: What South Africa's Drone Laws Mean for Farmers", excerpt: "Understanding the regulatory landscape protects your crop liability and ensures your aerial application is fully documented and legal." },
]

export default function D2Home() {
  const [activeTab, setActiveTab] = useState('aircraft')
  const currentTab = equipmentTabs.find((t) => t.id === activeTab)!

  return (
    <main style={{ background: '#F5F3F0', fontFamily: 'var(--font-rethink)' }}>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center pt-20" style={{ background: '#F5F3F0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-5 gap-16 items-center py-20">

          {/* Left content */}
          <div className="md:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.1em] mb-6"
              style={{ color: '#8B9271' }}
            >
              Precision Agricultural Drone Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#181818', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              Agriculture Deserves Better Than a Ground Rig.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base mb-8 max-w-xl"
              style={{ color: '#4E4E4E', lineHeight: '1.875' }}
            >
              Vortex Aerotech delivers precision aerial application across South Africa — crop spraying, granular spreading, and everything in between — operated by SACAA licensed pilots with DJI T100 technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href="/d2/services"
                className="text-base font-bold px-8 py-4 rounded-[20px] transition-all duration-200"
                style={{ background: '#FFF3A3', color: '#3A4526' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#8B9271'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#FFF3A3'; e.currentTarget.style.color = '#3A4526'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Explore Services
              </Link>
              <Link
                href="/d2/contact"
                className="text-base font-semibold px-8 py-4 rounded-[20px] border transition-all duration-200"
                style={{ border: '1.5px solid #8B9271', color: '#8B9271', background: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#8B9271'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8B9271' }}
              >
                Get a Quote
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-sm font-semibold"
              style={{ color: '#8B9271' }}
            >
              SACAA Licensed · DJI T100 · POC Certified
            </motion.div>
          </div>

          {/* Right imagery */}
          <div className="md:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="rounded-lg w-full aspect-[4/5]" style={{ background: 'linear-gradient(135deg, #8B9271, #F5F3F0)', borderRadius: 8 }} />
              <div
                className="absolute -bottom-6 -left-6 w-1/2 aspect-square rounded-lg border-4 border-white shadow-xl"
                style={{ background: 'linear-gradient(135deg, #FFF3A3, #8B9271)' }}
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 120, damping: 20 }}
                className="absolute top-6 -right-4 px-4 py-3 rounded-full shadow-lg text-sm font-bold"
                style={{ background: '#FFF3A3', color: '#3A4526' }}
              >
                45,000+ ha covered
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="py-14" style={{ background: '#8B9271' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-2xl md:text-3xl font-medium italic mb-6 text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            &ldquo;Regret always comes too late — let us rather come spray early.&rdquo;
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-white/80 text-sm font-semibold">
            {['SACAA Licensed Pilots', 'POC Certified Applicators', 'DJI T100 Technology'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / MISSION ── */}
      <section className="py-24" style={{ background: '#F5F3F0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#8B9271' }}>Why Vortex Aerotech</p>
            <h2 className="font-semibold mb-6 max-w-2xl mx-auto" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#181818', letterSpacing: '-0.02em', lineHeight: '1.25' }}>
              Built Around One Principle: Better Results.
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>
              We exist because ground equipment has limits. Soil conditions, terrain, and tight application windows all work against you. Aerial application removes those barriers — precisely, compliantly, and at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Leaf, title: 'Sustainable Application', desc: 'Aerial application eliminates soil compaction and reduces product usage through precision delivery — better for your land, better for your margins.' },
              { Icon: Target, title: 'Precision Coverage', desc: 'GPS-guided flight paths ensure exact application rates across every hectare. No overlaps, no skips, and no product wasted on field boundaries.' },
              { Icon: Shield, title: 'Full Compliance', desc: 'Every flight is operated by SACAA licensed pilots and POC certified applicators. Full compliance documentation is provided after every job.' },
            ].map(({ Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.15}>
                <div className="p-8 rounded-2xl" style={{ background: '#fff' }}>
                  <Icon size={32} className="mb-5" style={{ color: '#8B9271' }} />
                  <h5 className="text-xl font-semibold mb-3" style={{ color: '#181818' }}>{title}</h5>
                  <p className="text-base" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES CARDS ── */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#8B9271' }}>What We Do</p>
            <h2 className="font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#181818', letterSpacing: '-0.02em', lineHeight: '1.25' }}>
              Two Core Services. Endless Applications.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Crop Spraying',
                desc: 'Precision liquid application at consistent, calibrated rates — pesticides, fungicides, foliar nutrition, and more. Applied where ground equipment cannot reach.',
                items: ['Pesticide application', 'Foliar nutrition', 'Fungicide treatment'],
                gradient: 'linear-gradient(135deg, #8B9271, #F5F3F0)',
              },
              {
                title: 'Granular Spreading',
                desc: 'Fertiliser, lime, weedicide, and cover crop seed distributed with aerial precision — no compaction, no operator fatigue, no inconsistent passes.',
                items: ['Fertilizer application', 'Lime spreading', 'Cover crop seeding', 'Granular weedicide'],
                gradient: 'linear-gradient(135deg, #FFF3A3, #8B9271)',
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.15}>
                <div
                  className="rounded-2xl overflow-hidden border transition-all duration-250"
                  style={{ borderColor: '#DDD9D3' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div className="h-48 w-full" style={{ background: card.gradient }} />
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full" style={{ background: '#FFF3A3' }} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3" style={{ color: '#181818', letterSpacing: '-0.02em' }}>{card.title}</h3>
                    <p className="text-base mb-5" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>{card.desc}</p>
                    <ul className="flex flex-col gap-2 mb-6">
                      {card.items.map((item) => (
                        <li key={item} className="text-sm flex items-center gap-2" style={{ color: '#4E4E4E' }}>
                          <span style={{ color: '#FFF3A3', background: '#3A4526', borderRadius: '50%', padding: '2px 5px', fontSize: 10, fontWeight: 700 }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/d2/services" className="text-sm font-semibold" style={{ color: '#8B9271' }}>
                      Learn more →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24" style={{ background: '#F5F3F0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#8B9271' }}>How We Work</p>
            <h2 className="font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#181818', letterSpacing: '-0.02em', lineHeight: '1.25' }}>
              From First Call to Final Report
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { num: '1', title: 'Site Assessment', desc: 'We visit, map, and plan your field for complete coverage.' },
              { num: '2', title: 'Product Preparation', desc: 'On-site mixing in our 500L silos to your exact specifications.' },
              { num: '3', title: 'Aerial Application', desc: 'GPS-guided flights deliver consistent product across every hectare.' },
              { num: '4', title: 'Documentation', desc: 'Full compliance records and flight data delivered within 24 hours.' },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5"
                    style={{ background: '#FFF3A3', color: '#3A4526', fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}
                  >
                    {step.num}
                  </div>
                  <h5 className="font-semibold text-lg mb-2" style={{ color: '#181818' }}>{step.title}</h5>
                  <p className="text-sm" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT TABS ── */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-semibold text-center mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#181818', letterSpacing: '-0.02em', lineHeight: '1.25' }}>
            The Equipment Behind Every Flight
          </h2>
          <div className="flex gap-2 mb-10 border-b" style={{ borderColor: '#DDD9D3' }}>
            {equipmentTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="pb-3 px-1 mr-6 text-base font-semibold relative transition-colors"
                style={{ color: activeTab === tab.id ? '#181818' : '#4E4E4E' }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="d2-tab" className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: '#FFF3A3' }} />
                )}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center"
            >
              <div className="md:col-span-3 rounded-2xl overflow-hidden aspect-video" style={{ background: 'linear-gradient(135deg, #8B9271, #FFF3A3)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  {activeTab === 'aircraft' ? <Plane size={80} className="text-white opacity-20" /> : <Truck size={80} className="text-white opacity-20" />}
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#181818', letterSpacing: '-0.02em' }}>{currentTab.title}</h3>
                <p className="text-base mb-6" style={{ color: '#4E4E4E', lineHeight: '1.875' }}>{currentTab.desc}</p>
                <ul className="flex flex-col gap-3">
                  {currentTab.specs.map((s) => (
                    <li key={s} className="text-base flex items-center gap-3" style={{ color: '#4E4E4E' }}>
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#FFF3A3', border: '2px solid #3A4526' }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section className="py-20" style={{ background: '#2C2C2A' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl italic mb-4 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            &ldquo;Precision agriculture isn&apos;t a luxury — it&apos;s the only way to farm sustainably at scale.&rdquo;
          </p>
          <p className="text-sm mb-12" style={{ color: 'rgba(255,255,255,0.4)' }}>— Vortex Aerotech</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {[
              { value: 45000, label: 'Hectares Covered', suffix: '+' },
              { value: 8, label: 'Licensed Pilots', suffix: '' },
              { value: 6, label: 'Years Experience', suffix: '' },
              { value: 98, label: 'Client Satisfaction', suffix: '%' },
            ].map((s) => (
              <CounterStat
                key={s.label}
                value={s.value}
                label={s.label}
                suffix={s.suffix}
                className="text-center"
                numClassName="text-4xl font-bold mb-1"
                labelClassName="text-xs uppercase tracking-widest opacity-50"
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['SACAA Licensed', 'POC Certified', 'DJI Authorised'].map((b) => (
              <span key={b} className="text-xs font-semibold px-4 py-2 border rounded" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="py-24" style={{ background: '#F5F3F0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: '#8B9271' }}>Insights</p>
            <h2 className="font-semibold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#181818', letterSpacing: '-0.02em', lineHeight: '1.25' }}>Latest from the Field</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden border" style={{ borderColor: '#DDD9D3' }}>
                  <div className="h-40" style={{ background: `linear-gradient(${135 + i * 20}deg, #8B9271, #FFF3A3)` }} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: '#FFF3A3', color: '#3A4526' }}>{post.category}</span>
                      <span className="text-xs" style={{ color: '#8B9271' }}>{post.date}</span>
                    </div>
                    <h4 className="font-semibold text-base mb-3 leading-snug" style={{ color: '#181818' }}>{post.title}</h4>
                    <p className="text-sm mb-4" style={{ color: '#4E4E4E', lineHeight: '1.7' }}>{post.excerpt}</p>
                    <span className="text-sm font-semibold" style={{ color: '#8B9271' }}>Read →</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-24" style={{ background: '#FFF3A3' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-semibold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#181818', letterSpacing: '-0.02em', lineHeight: '1.25' }}>
            Ready to Spray with Precision?
          </h2>
          <p className="text-base mb-8" style={{ color: '#3A4526', opacity: 0.75 }}>
            Call Hein or Henk today for a same-day quote. No obligation, no hard sell — just precision agriculture from people who understand farming.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/d2/contact"
              className="text-base font-bold px-8 py-4 rounded-[20px] transition-all duration-200"
              style={{ background: '#3A4526', color: '#FFF3A3' }}
            >
              Get a Quote
            </Link>
            <a
              href="tel:+27845558144"
              className="text-base font-semibold px-8 py-4 rounded-[20px] border-2 transition-all duration-200"
              style={{ border: '2px solid #3A4526', color: '#3A4526' }}
            >
              Call Hein: +27 84 555 8144
            </a>
          </div>
        </div>
      </section>

      <D2Footer />
    </main>
  )
}
