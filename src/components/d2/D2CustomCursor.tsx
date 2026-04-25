'use client'
import { useEffect, useRef } from 'react'

export default function D2CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let x = 0, y = 0, fx = 0, fy = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    const loop = () => {
      fx += (x - fx) * 0.12
      fy += (y - fy) * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${fx - 25}px, ${fy - 25}px)`
      }
      rafId = requestAnimationFrame(loop)
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button') && followerRef.current) {
        followerRef.current.style.width = '80px'
        followerRef.current.style.height = '80px'
        followerRef.current.style.marginLeft = '-15px'
        followerRef.current.style.marginTop = '-15px'
      }
    }

    const onLeave = () => {
      if (followerRef.current) {
        followerRef.current.style.width = '50px'
        followerRef.current.style.height = '50px'
        followerRef.current.style.marginLeft = '0'
        followerRef.current.style.marginTop = '0'
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{ width: 6, height: 6, background: 'rgba(44,65,40,1)', willChange: 'transform' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full transition-[width,height] duration-200"
        style={{ width: 50, height: 50, background: 'rgba(55,73,51,0.15)', willChange: 'transform' }}
      />
    </>
  )
}
