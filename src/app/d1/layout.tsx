import D1Nav from '@/components/d1/D1Nav'
import DirectionSwitcher from '@/components/shared/DirectionSwitcher'

export default function D1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d1-theme">
      <DirectionSwitcher />
      <D1Nav />
      {children}
    </div>
  )
}
