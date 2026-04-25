'use client'
import { motion } from 'framer-motion'
import { Shield, Zap, Target, Leaf, Plane, Truck, Users } from 'lucide-react'
import Link from 'next/link'
import D3Footer from '@/components/d3/D3Footer'
import CounterStat from '@/components/shared/CounterStat'
import ScrollReveal from '@/components/shared/ScrollReveal'
import Marquee from '@/components/shared/Marquee'

const blogPosts = [
  { category: 'Agronomy', date: 'March 2025', title: 'Why Spray Windows Close Faster Than You Think', excerpt: 'Disease pressure accelerates exponentially once conditions are right. We break down the critical 48-hour window.' },
  { category: 'Technology', date: 'Feb 2025', title: 'GPS Precision: How Sub-Metre Accuracy Changes Application Outcomes', excerpt: 'The difference between 1-metre and 5-metre GPS accuracy isn\'t just technical — it translates directly to yield.' },
  { category: 'Compliance', date: 'Jan 2025', title: 'SACAA Licensing Explained for South African Farmers', excerpt: 'Understanding what certification your aerial applicator needs — and how to verify it before they fly.' },
]

export default function D3Home() {
  return (
    <main style={{ fontFamily: 'var(--font-jakarta)' }}>

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-center pt-20" style={{ background: '#111110' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-5 gap-12 items-center py-20">

          {/* Left content */}
          <div className="md:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-[0.15em] mb-6"
              style={{ color: '#A8C090' }}
            >
              Precision Agricultural Drone Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-extrabold mb-6 leading-none"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 4rem)', color: '#F0EEE8', letterSpacing: '-0.03em' }}
            >
              Precision{' '}
              <em style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontWeight: 400, color: '#A8C090' }}>
                that farms
              </em>{' '}
              <br />can feel.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base mb-8 max-w-lg"
              style={{ color: 'rgba(240,238,232,0.6)', lineHeight: '1.75' }}
            >
              Vortex Aerotech delivers SACAA licensed aerial application using DJI T100 technology — crop spraying and granular spreading executed with sub-metre GPS precision, documented in full after every flight.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/d3/services"
                className="text-sm font-bold px-7 py-3.5 transition-all duration-200"
                style={{ background: '#A8C090', color: '#2C4128', borderRadius: 4 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#C8B560'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(168,192,144,0.3)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#A8C090'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                Our Services
              </Link>
              <Link
                href="/d3/contact"
                className="text-sm font-bold px-7 py-3.5 transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.25)', color: '#F0EEE8', background: 'transparent', borderRadius: 4 }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#A8C090'; e.currentTarget.style.color = '#A8C090' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#F0EEE8' }}
              >
                Get a Quote
              </Link>
            </motion.div>

            {/* Stat capsules */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { num: '45K+', label: 'Hectares' },
                { num: '8', label: 'Pilots' },
                { num: '98%', label: 'Satisfaction' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="px-4 py-2 rounded-full flex items-center gap-2 text-xs"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F0EEE8' }}
                >
                  <span className="font-bold" style={{ color: '#A8C090' }}>{s.num}</span>
                  <span style={{ color: 'rgba(240,238,232,0.5)' }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — drone visual */}
          <div className="md:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Main drone image area */}
              <div
                className="drone-float rounded-xl aspect-[3/4] flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(44,65,40,0.5) 0%, transparent 70%), #1a1a18',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Plane size={120} style={{ color: '#A8C090', opacity: 0.35 }} />

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(168,192,144,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,192,144,0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Telemetry card */}
              <div
                className="absolute bottom-4 -left-4 p-4 rounded telemetry-tick"
                style={{
                  background: '#1a1a18',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontFamily: 'monospace',
                  minWidth: 160,
                }}
              >
                <p className="text-xs mb-2 font-bold uppercase tracking-widest" style={{ color: '#A8C090' }}>Flight Data</p>
                {[
                  { label: 'ALT', value: '6.2m' },
                  { label: 'RATE', value: '3.2 L/ha' },
                  { label: 'COV', value: '94.7%' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-xs mb-1">
                    <span style={{ color: 'rgba(240,238,232,0.4)' }}>{row.label}</span>
                    <span style={{ color: '#A8C090' }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marquee */}
        <Marquee
          text="SACAA LICENSED · DJI T100 · PRECISION AGRICULTURE · CROP SPRAYING · GRANULAR SPREADING · POC CERTIFIED ·"
          className="py-4 text-xs font-bold tracking-[0.12em]"
          trackClassName="text-white"
          speed={25}
        />
      </section>

      {/* ── STATS ── */}
      <section className="py-16" style={{ background: '#2C4128' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ color: '#F0EEE8' }}>
          {[
            { value: 45000, label: 'Hectares Covered', suffix: '+' },
            { value: 8, label: 'Licensed Pilots', suffix: '' },
            { value: 6, label: 'Years Operating', suffix: '' },
            { value: 98, label: 'Client Satisfaction', suffix: '%' },
          ].map((s) => (
            <CounterStat
              key={s.label}
              value={s.value}
              label={s.label}
              suffix={s.suffix}
              className="text-center"
              numClassName="text-4xl md:text-5xl font-extrabold mb-1"
              labelClassName="text-xs uppercase tracking-widest opacity-50"
            />
          ))}
        </div>
      </section>

      {/* ── SERVICES (NUMBERED LIST) ── */}
      <section className="py-24" style={{ background: '#F2F0EB' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>Our Services</p>
            <h2 className="font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#2A2A28', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Two Core Services.<br />Infinite Applications.
            </h2>
          </div>

          <div className="flex flex-col divide-y" style={{ divideColor: '#CCCAB8' } as React.CSSProperties}>
            {[
              {
                num: '01',
                title: 'Crop Spraying',
                desc: 'Precision liquid application for pesticides, fungicides, and foliar nutrients. Consistent droplet distribution at exact, calibrated rates — delivered from the optimal height above your canopy regardless of terrain.',
              },
              {
                num: '02',
                title: 'Granular Spreading',
                desc: 'Fertiliser, lime, weedicide, and cover crop seed distributed with aerial accuracy across any field. No soil compaction, no operator fatigue, no inconsistent passes from tired ground equipment.',
              },
            ].map((service, i) => (
              <ScrollReveal key={service.num} delay={i * 0.12}>
                <div
                  className="py-10 flex gap-8 items-start group cursor-pointer transition-all duration-200"
                  style={{ borderColor: '#CCCAB8' }}
                  onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = '16px'; (e.currentTarget.querySelector('.service-num') as HTMLElement).style.color = '#C8B560' }}
                  onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = '0'; (e.currentTarget.querySelector('.service-num') as HTMLElement).style.color = 'rgba(168,192,144,0.25)' }}
                >
                  <div
                    className="service-num text-8xl font-extrabold leading-none flex-shrink-0 transition-colors duration-200"
                    style={{ color: 'rgba(168,192,144,0.25)', fontFamily: 'var(--font-jakarta)' }}
                  >
                    {service.num}
                  </div>
                  <div className="pt-4">
                    <h4 className="font-bold text-xl mb-3" style={{ color: '#2A2A28' }}>{service.title}</h4>
                    <p className="text-base mb-6" style={{ color: '#6A6A60', lineHeight: '1.75' }}>{service.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Sub-service lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-12 border-t" style={{ borderColor: '#CCCAB8' }}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>Crop Spraying includes</p>
              <ul className="flex flex-col gap-2">
                {['Pesticide application', 'Foliar nutrition', 'Fungicide treatment', 'Herbicide application', 'Growth regulator application'].map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2" style={{ color: '#6A6A60' }}>
                    <span style={{ color: '#A8C090' }}>—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>Granular Spreading includes</p>
              <ul className="flex flex-col gap-2">
                {['Granular weedicide spreading', 'Fertilizer application', 'Lime application', 'Cover crop seeding', 'Micro-nutrient top dressing'].map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2" style={{ color: '#6A6A60' }}>
                    <span style={{ color: '#A8C090' }}>—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / TECH FOCUS ── */}
      <section className="py-24" style={{ background: '#1a1a18' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left">
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-6" style={{ color: '#A8C090' }}>About Vortex Aerotech</p>
            <h2 className="font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#F0EEE8', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Built for the{' '}
              <em style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontWeight: 400 }}>realities</em>{' '}
              of farming.
            </h2>
            <p className="text-base mb-4" style={{ color: 'rgba(240,238,232,0.6)', lineHeight: '1.75' }}>
              Vortex Aerotech was built by people who understand what&apos;s at stake when a spray window closes. We operate DJI T100 agricultural drones — the most advanced spray platform available — with SACAA licensed pilots and POC certified aerial applicators on every job.
            </p>
            <p className="text-base mb-6" style={{ color: 'rgba(240,238,232,0.6)', lineHeight: '1.75' }}>
              Our NIC 35 support trailers with twin 500-litre mixing silos allow us to work independently in the field — no downtime, no waiting for product, no excuses.
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {['SACAA Licensed and fully compliant', 'POC Certified aerial applicators', 'DJI T100 — latest generation technology', 'NIC 35 trailers with 500L mixing silos'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(240,238,232,0.6)' }}>
                  <span style={{ color: '#A8C090', fontSize: 16 }}>—</span> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: Shield, title: 'SACAA Licensed', desc: 'Every flight fully compliant with South African aviation law.' },
                { Icon: Target, title: 'Sub-Metre GPS', desc: 'Precision GPS flight paths on every application run.' },
                { Icon: Zap, title: '100ha/hr Coverage', desc: 'DJI T100 delivers at scale that ground rigs cannot match.' },
                { Icon: Leaf, title: 'Zero Compaction', desc: 'No heavy machinery on your soil — ever.' },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-5 rounded-md"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Icon size={20} className="mb-3" style={{ color: '#A8C090' }} />
                  <h5 className="font-bold text-sm mb-1 text-white">{title}</h5>
                  <p className="text-xs" style={{ color: 'rgba(240,238,232,0.4)', lineHeight: '1.6' }}>{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── EQUIPMENT ── */}
      <section className="py-24" style={{ background: '#E8E5DE' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>Equipment</p>
            <h2 className="font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#2A2A28', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              The Tools We Trust.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Plane, title: 'DJI T100 Agricultural Drone', specs: [['Tank', '100L liquid'], ['Coverage', '100ha/hr'], ['Spray Width', '16 metres'], ['Navigation', 'GPS autopilot'], ['Safety', 'Obstacle radar'], ['Compliance', 'SACAA approved']] },
              { Icon: Truck, title: 'NIC 35 Support Trailer', specs: [['Silos', 'Twin 500L'], ['Mixing', 'On-site prep'], ['Reload', 'Rapid turnaround'], ['Products', 'Liquid & granular'], ['Equipment', 'Full calibration'], ['Operation', 'Self-contained']] },
              { Icon: Users, title: 'Certified Flight Crew', specs: [['Pilots', 'SACAA RPL'], ['Applicators', 'POC Certified'], ['Training', 'Full compliance'], ['Insurance', 'Covered ops'], ['Records', 'Full documentation'], ['Experience', '6+ years']] },
            ].map(({ Icon, title, specs }) => (
              <ScrollReveal key={title}>
                <div
                  className="p-6 bg-white rounded-lg border transition-all duration-200"
                  style={{ borderColor: '#CCCAB8' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#A8C090'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.08)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#CCCAB8'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <Icon size={24} className="mb-5" style={{ color: '#A8C090' }} />
                  <h4 className="font-bold text-base mb-5" style={{ color: '#2A2A28' }}>{title}</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {specs.map(([label, value]) => (
                      <div key={label}>
                        <p className="text-xs" style={{ color: '#6A6A60' }}>{label}</p>
                        <p className="text-sm font-semibold" style={{ color: '#2A2A28' }}>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24" style={{ background: '#111110' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>Process</p>
            <h2 className="font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#F0EEE8', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              From Call to Coverage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Site Assessment', desc: 'We map your land, assess obstacles, and design precision flight paths for complete coverage.' },
              { num: '02', title: 'Product Preparation', desc: 'On-site mixing in our 500L silos to your exact specifications before every flight.' },
              { num: '03', title: 'Precision Application', desc: 'GPS-guided DJI T100 flights cover your full field at consistent, calibrated rates.' },
              { num: '04', title: 'Compliance Reporting', desc: 'Full flight data, coverage maps, and SACAA documentation delivered within 24 hours.' },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold mx-auto mb-5"
                    style={{ borderColor: '#A8C090', color: '#A8C090' }}
                  >
                    {step.num}
                  </div>
                  <h5 className="font-bold text-base mb-2" style={{ color: '#F0EEE8' }}>{step.title}</h5>
                  <p className="text-sm" style={{ color: 'rgba(240,238,232,0.5)', lineHeight: '1.7' }}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <p
              className="text-lg italic"
              style={{ fontFamily: 'Instrument Serif, Georgia, serif', color: '#A8C090' }}
            >
              Every flight is documented, compliant, and optimised for your land.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST / COMPLIANCE ── */}
      <section className="py-20" style={{ background: '#2C4128' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
            Compliance Is Not Optional.
          </h2>
          <p className="text-base mb-10" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.75' }}>
            Every Vortex Aerotech flight is operated under full SACAA compliance. We hold SACAA Remote Pilot Licences, POC Aerial Applicator Certification, and full insurance coverage on every job. Documentation is delivered to you after every application.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['SACAA', 'POC Certified', 'DJI Authorised'].map((badge) => (
              <div
                key={badge}
                className="w-32 h-32 flex items-center justify-center text-sm font-bold rounded"
                style={{ border: '1.5px solid #A8C090', color: '#A8C090' }}
              >
                {badge}
              </div>
            ))}
          </div>
          <p
            className="text-xl italic"
            style={{ fontFamily: 'Instrument Serif, Georgia, serif', color: '#A8C090' }}
          >
            &ldquo;Spyt kom altyd te laat, so laat ons liewer vroeg kom spuit.&rdquo;
          </p>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="py-24" style={{ background: '#1a1a18' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: '#A8C090' }}>Insights</p>
            <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>From the Field</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.1}>
                <div
                  className="p-6 rounded-lg border"
                  style={{ background: '#111110', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded" style={{ background: 'rgba(168,192,144,0.1)', color: '#A8C090' }}>{post.category}</span>
                    <span className="text-xs" style={{ color: 'rgba(240,238,232,0.35)' }}>{post.date}</span>
                  </div>
                  <h4 className="font-bold text-base mb-3 text-white leading-snug">{post.title}</h4>
                  <p className="text-sm mb-4" style={{ color: 'rgba(240,238,232,0.5)', lineHeight: '1.7' }}>{post.excerpt}</p>
                  <span className="text-sm font-bold" style={{ color: '#A8C090' }}>Read more →</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#111110' }}>
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(44,65,40,0.35) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', letterSpacing: '-0.02em' }}>
            Ready to Cover Your Ground?
          </h2>
          <p className="text-base mb-10" style={{ color: 'rgba(240,238,232,0.5)', lineHeight: '1.75' }}>
            Contact Hein or Henk directly for a same-day quote. We mobilise fast and we deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/d3/contact"
              className="text-sm font-bold px-8 py-4 transition-all duration-200"
              style={{ background: '#A8C090', color: '#2C4128', borderRadius: 4 }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#C8B560'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#A8C090'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Get a Quote
            </Link>
            <a
              href="tel:+27845558144"
              className="text-sm font-bold px-8 py-4 transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#F0EEE8', borderRadius: 4 }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#A8C090'; e.currentTarget.style.color = '#A8C090' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#F0EEE8' }}
            >
              Call Hein
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-12 text-sm">
            {[
              { name: 'Hein', phone: '+27 84 555 8144' },
              { name: 'Henk', phone: '+27 78 915 8120' },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <p className="font-bold mb-1" style={{ color: '#A8C090' }}>{p.name}</p>
                <a href={`tel:${p.phone.replace(/\s/g,'')}`} style={{ color: 'rgba(240,238,232,0.5)' }}>{p.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <D3Footer />
    </main>
  )
}
