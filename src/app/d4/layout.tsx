import D4Nav from '@/components/d4/D4Nav'
import DirectionSwitcher from '@/components/shared/DirectionSwitcher'

export default function D4Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d4-theme">
      <DirectionSwitcher />
      <D4Nav />
      {children}
    </div>
  )
}
