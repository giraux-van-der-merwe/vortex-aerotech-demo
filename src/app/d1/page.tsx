'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Shield, Zap, Award, Leaf, ChevronLeft, ChevronRight, Plane, Truck, Users } from 'lucide-react'
import Link from 'next/link'
import D1Footer from '@/components/d1/D1Footer'
import CounterStat from '@/components/shared/CounterStat'
import ScrollReveal from '@/components/shared/ScrollReveal'

const slides = [
  {
    label: 'Precision Crop Application',
    headline: 'Every Hectare Covered.\nNot a Drop Wasted.',
    sub: 'Vortex Aerotech delivers precision aerial spraying where ground rigs cannot. Pesticides, fungicides, and foliar nutrients applied at exact rates — from 100 metres above your field.',
    cta: 'Our Services',
    ctaHref: '/d1/services',
  },
  {
    label: 'Granular Spreading Capability',
    headline: 'From Lime to Cover Crops —\nWe Spread It Right.',
    sub: 'Our DJI T100 drones carry fertilisers, weedicides, lime, and cover crop seed across your land with pinpoint accuracy. No soil compaction. No missed rows.',
    cta: 'See Services',
    ctaHref: '/d1/services',
  },
  {
    label: 'Licensed. Certified. Ready.',
    headline: 'A Team You Can Trust\nWith Your Livelihood.',
    sub: 'Every Vortex Aerotech flight is operated by SACAA licensed pilots and POC certified aerial applicators. Full compliance documentation included with every job.',
    cta: 'Get a Quote',
    ctaHref: '/d1/contact',
  },
]

const processSteps = [
  { num: '01', title: 'Site Assessment & Flight Planning', desc: 'We map your land, identify obstacles, and plan optimal flight paths for complete coverage.' },
  { num: '02', title: 'Equipment Calibration & Mix Preparation', desc: 'Our NIC 35 trailers mix your product in 500L silos to precise specifications before every flight.' },
  { num: '03', title: 'Precision Aerial Application', desc: 'DJI T100 drones execute programmed flight paths, applying product at consistent, calibrated rates across every hectare.' },
  { num: '04', title: 'Compliance Documentation & Reporting', desc: 'Full flight logs, application records, and compliance documentation delivered after every job.' },
]

const equipmentTabs = [
  {
    id: 'aircraft',
    label: 'Aircraft',
    title: 'DJI T100 Agricultural Drone',
    desc: 'The DJI Agras T100 represents the pinnacle of agricultural drone technology. With a 100-litre tank capacity and a 16-metre effective spray width, it can cover up to 100 hectares per hour — delivering consistent, calibrated coverage that ground equipment simply cannot match.',
    specs: [
      '100-litre liquid tank capacity',
      '16-metre effective spray width',
      'Up to 100 hectares per hour coverage',
      'Active phased array radar for obstacle avoidance',
      'Terrain-following flight for consistent application height',
      'SACAA approved for agricultural operations',
    ],
  },
  {
    id: 'ground',
    label: 'Ground Support',
    title: 'NIC 35 Support Trailer',
    desc: 'Our NIC 35 support trailers keep operations moving without downtime. Each unit is fitted with twin 500-litre mixing silos, allowing precise product preparation on-site. While one tank is in the air, the next batch is being mixed — maximising daily coverage rates.',
    specs: [
      'Twin 500-litre mixing silos',
      'On-site product preparation capability',
      'Rapid drone reloading system',
      'Compatible with liquid and granular products',
      'Full calibration equipment on board',
      'Self-contained field operation unit',
    ],
  },
]

const blogPosts = [
  {
    date: 'March 2025',
    title: 'Early Fungicide Application: Why Timing Makes or Breaks Your Yield',
    excerpt: 'Waiting until you see the disease is already too late. We break down why aerial application at first risk gives you the best protection per rand spent.',
  },
  {
    date: 'February 2025',
    title: 'Drone vs Ground Rig: A Realistic Cost Comparison for SA Farmers',
    excerpt: 'Soil compaction, fuel, labour, and missed application windows — the true cost of ground rigs goes beyond the quoted rate.',
  },
  {
    date: 'January 2025',
    title: 'SACAA Certification: What It Means for You as a Farmer',
    excerpt: 'Not all drone operators are created equal. Understanding SACAA licensing protects your crops, your liability, and your peace of mind.',
  },
]

export default function D1Home() {
  const [slide, setSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('aircraft')
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, amount: 0.3 })

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const currentTab = equipmentTabs.find((t) => t.id === activeTab)!

  return (
    <main style={{ background: '#faf9f6', fontFamily: 'var(--font-dm-sans)' }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <motion.div
          key={slide}
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'linear' }}
          style={{ background: 'linear-gradient(135deg, #3f492a 0%, #bcc79d 100%)' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(63,73,42,0.5)' }} />

        {/* Slide content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-[0.12em] mb-6"
                style={{ color: '#ecf96e' }}
              >
                {slides[slide].label}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-extrabold mb-6 whitespace-pre-line leading-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontFamily: 'var(--font-bricolage)' }}
              >
                {slides[slide].headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl"
              >
                {slides[slide].sub}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href={slides[slide].ctaHref}
                  className="text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 transition-all duration-200"
                  style={{ background: '#ecf96e', color: '#3f492a' }}
                >
                  {slides[slide].cta}
                </Link>
                <Link
                  href="/d1/contact"
                  className="text-xs font-bold uppercase tracking-[0.12em] px-6 py-3 border border-white/50 text-white transition-all duration-200 hover:border-white"
                >
                  Talk to Us
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === slide ? 24 : 8,
                height: 8,
                background: i === slide ? '#ecf96e' : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>

        {/* Arrow nav */}
        <button
          onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => setSlide((s) => (s + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/60 hover:text-white transition-colors"
        >
          <ChevronRight size={28} />
        </button>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-24" style={{ background: '#faf9f6' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl w-full aspect-[4/3]" style={{ background: 'linear-gradient(135deg, #3f492a, #bcc79d)' }} />
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-[4/3] rounded-xl border-4 border-white" style={{ background: 'linear-gradient(135deg, #bcc79d, #ecf96e)' }} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: '#ecf96e', background: '#3f492a', display: 'inline-block', padding: '4px 12px' }}>
              About Vortex Aerotech
            </p>
            <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-bricolage)', color: '#3f492a', lineHeight: 1.1 }}>
              Precision from Above. Results You Can Measure.
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#585858' }}>
              Vortex Aerotech was built by people who understand farming. We know what&apos;s at stake when a fungicide window closes or a fertiliser application gets delayed. That&apos;s why we operate DJI T100 drones with SACAA licensed pilots — bringing speed, precision, and full compliance to every job we take on.
            </p>
            <div className="flex flex-col gap-5 mb-8">
              {[
                { Icon: Shield, title: 'Fully Licensed & Certified', desc: 'Every pilot holds SACAA licences. Every applicator carries POC certification.' },
                { Icon: Zap, title: 'Unmatched Speed & Scale', desc: 'Cover 100 hectares per hour with the DJI T100 — ground equipment cannot compete.' },
                { Icon: Award, title: 'No Soil Compaction', desc: 'Aerial application leaves your soil structure intact, protecting long-term productivity.' },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="p-2 rounded" style={{ background: '#ecf96e' }}>
                    <Icon size={20} style={{ color: '#3f492a' }} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm mb-1" style={{ color: '#3f492a' }}>{title}</h5>
                    <p className="text-sm" style={{ color: '#585858' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/d1/services" className="text-sm font-bold" style={{ color: '#3f492a' }}>
              Explore our services →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24" style={{ background: '#3f492a' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: '#ecf96e' }}>Our Services</p>
            <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-bricolage)', color: '#fff', lineHeight: 1.1 }}>
              Aerial Solutions for Every Crop Need
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
              From pesticide application to cover crop seeding, our DJI T100 fleet handles the full spectrum of agricultural aerial work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                Icon: Plane,
                title: 'Crop Spraying',
                delay: 0,
                items: ['Pesticide application', 'Foliar nutrition', 'Fungicide treatment'],
                desc: 'Liquid applications at precise rates, consistent spray distribution, and coverage that reaches where ground rigs cannot go.',
              },
              {
                Icon: Leaf,
                title: 'Granular Spreading',
                delay: 0.15,
                items: ['Granular weedicide spreading', 'Fertilizer application', 'Lime application', 'Cover crop seeding'],
                desc: 'Granular product spread with calibrated accuracy across any terrain — no compaction, no skipped rows, no wasted product.',
              },
            ].map(({ Icon, title, delay, items, desc }) => (
              <ScrollReveal key={title} delay={delay}>
                <div
                  className="p-8 rounded-xl relative overflow-hidden group border transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <div className="mb-6">
                    <div className="p-3 rounded inline-block mb-4" style={{ background: 'rgba(236,249,110,0.15)' }}>
                      <Icon size={28} style={{ color: '#ecf96e' }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-bricolage)' }}>{title}</h3>
                    <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{desc}</p>
                    <ul className="flex flex-col gap-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                          <span style={{ color: '#ecf96e' }}>→</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Hover border accent */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: '#ecf96e' }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="py-24" style={{ background: '#faf9f6' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: '#ecf96e', background: '#3f492a', display: 'inline-block', padding: '4px 12px' }}>How It Works</p>
            <h2 className="font-bold mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-bricolage)', color: '#3f492a', lineHeight: 1.1 }}>
              From Call to Coverage in 4 Steps
            </h2>
          </div>

          <div ref={lineRef} className="relative">
            {/* Connecting line — z-0 keeps it behind numbers */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px z-0" style={{ background: '#DFDEDC' }}>
              <motion.div
                className="h-full"
                style={{ background: '#bcc79d' }}
                initial={{ width: '0%' }}
                animate={{ width: lineInView ? '100%' : '0%' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.1}>
                  <div className="relative z-10 text-center md:text-left">
                    <div
                      className="text-8xl font-extrabold mb-4 leading-none"
                      style={{ fontFamily: 'var(--font-bricolage)', color: '#3f492a', opacity: 0.18 }}
                    >
                      {step.num}
                    </div>
                    <h5 className="font-bold mb-2 text-base" style={{ color: '#3f492a' }}>{step.title}</h5>
                    <p className="text-sm leading-relaxed" style={{ color: '#585858' }}>{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20" style={{ background: '#ecf96e' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ color: '#3f492a' }}>
          {[
            { value: 45000, label: 'Hectares Sprayed', suffix: '+' },
            { value: 8, label: 'Licensed Pilots', suffix: '' },
            { value: 6, label: 'Years Operating', suffix: '' },
            { value: 98, label: 'Client Satisfaction', suffix: '%' },
          ].map((stat) => (
            <CounterStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              className="text-center"
              numClassName="text-5xl md:text-6xl font-extrabold leading-none mb-2"
              labelClassName="text-xs font-bold uppercase tracking-widest opacity-70"
            />
          ))}
        </div>
      </section>

      {/* ── EQUIPMENT TABS ── */}
      <section className="py-24" style={{ background: '#faf9f6' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: '#ecf96e', background: '#3f492a', display: 'inline-block', padding: '4px 12px' }}>Our Equipment</p>
            <h2 className="font-bold mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-bricolage)', color: '#3f492a', lineHeight: 1.1 }}>
              The Technology Behind Every Flight
            </h2>
          </div>

          <div className="flex gap-2 mb-10 border-b" style={{ borderColor: '#DFDEDC' }}>
            {equipmentTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="text-sm font-bold pb-3 px-1 mr-6 relative transition-colors duration-200"
                style={{ color: activeTab === tab.id ? '#3f492a' : '#585858' }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: '#ecf96e' }}
                  />
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
              <div className="md:col-span-3 rounded-xl overflow-hidden aspect-video" style={{ background: 'linear-gradient(135deg, #3f492a, #bcc79d)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  {activeTab === 'aircraft' ? <Plane size={80} className="text-white opacity-20" /> : <Truck size={80} className="text-white opacity-20" />}
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-bricolage)', color: '#3f492a' }}>{currentTab.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#585858' }}>{currentTab.desc}</p>
                <ul className="flex flex-col gap-2">
                  {currentTab.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-sm" style={{ color: '#585858' }}>
                      <span className="mt-0.5 font-bold" style={{ color: '#ecf96e', background: '#3f492a', borderRadius: 2, padding: '1px 4px', fontSize: 10 }}>✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── TRUST SIGNAL ── */}
      <section className="py-20" style={{ background: '#3f492a' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3
            className="text-3xl md:text-4xl font-bold italic mb-6 text-white leading-snug"
            style={{ fontFamily: 'var(--font-bricolage)' }}
          >
            &ldquo;Spyt kom altyd te laat, so laat ons liewer vroeg kom spuit.&rdquo;
          </h3>
          <p className="text-sm mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Regret always comes too late, so let us rather come spray early.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['SACAA Licensed', 'POC Certified', 'DJI Authorised'].map((badge) => (
              <div
                key={badge}
                className="px-5 py-2 text-xs font-bold uppercase tracking-widest border"
                style={{ color: '#ecf96e', borderColor: 'rgba(236,249,110,0.4)' }}
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG TEASERS ── */}
      <section className="py-24" style={{ background: '#faf9f6' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.12em] mb-4" style={{ color: '#ecf96e', background: '#3f492a', display: 'inline-block', padding: '4px 12px' }}>Insights</p>
            <h2 className="font-bold mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-bricolage)', color: '#3f492a', lineHeight: 1.1 }}>
              From the Field
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.1}>
                <div className="border rounded-xl overflow-hidden group cursor-pointer" style={{ borderColor: '#DFDEDC' }}>
                  <div className="aspect-video" style={{ background: `linear-gradient(${135 + i * 20}deg, #3f492a, #bcc79d)` }} />
                  <div className="p-6">
                    <p className="text-xs mb-3" style={{ color: '#bcc79d' }}>{post.date}</p>
                    <h4 className="font-bold mb-3 text-base leading-snug" style={{ fontFamily: 'var(--font-bricolage)', color: '#3f492a' }}>{post.title}</h4>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#585858' }}>{post.excerpt}</p>
                    <span className="text-sm font-bold" style={{ color: '#3f492a' }}>Read More →</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <D1Footer />
    </main>
  )
}
