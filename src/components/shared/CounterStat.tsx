'use client'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface Props {
  value: number
  label: string
  prefix?: string
  suffix?: string
  className?: string
  numClassName?: string
  labelClassName?: string
}

export default function CounterStat({ value, label, prefix = '', suffix = '', className, numClassName, labelClassName }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: 'easeOut' })
    }
  }, [inView, value, count])

  return (
    <div ref={ref} className={className}>
      <div className={numClassName} style={{ color: 'inherit' }}>
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className={labelClassName}>{label}</div>
    </div>
  )
}
