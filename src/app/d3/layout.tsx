import D3Nav from '@/components/d3/D3Nav'
import DirectionSwitcher from '@/components/shared/DirectionSwitcher'

export default function D3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d3-theme">
      <DirectionSwitcher />
      <D3Nav />
      {children}
    </div>
  )
}
