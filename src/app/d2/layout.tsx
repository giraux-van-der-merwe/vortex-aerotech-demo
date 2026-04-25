import D2Nav from '@/components/d2/D2Nav'
import D2CustomCursor from '@/components/d2/D2CustomCursor'
import DirectionSwitcher from '@/components/shared/DirectionSwitcher'

export default function D2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d2-theme" style={{ cursor: 'none' }}>
      <D2CustomCursor />
      <DirectionSwitcher />
      <D2Nav />
      {children}
    </div>
  )
}
