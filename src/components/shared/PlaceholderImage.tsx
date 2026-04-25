import { Plane } from 'lucide-react'

interface Props {
  gradient: string
  className?: string
  aspectRatio?: string
  icon?: boolean
}

export default function PlaceholderImage({ gradient, className, aspectRatio = '4/3', icon = true }: Props) {
  return (
    <div
      className={`flex items-center justify-center ${className ?? ''}`}
      style={{ background: gradient, aspectRatio }}
    >
      {icon && <Plane size={48} className="opacity-20 text-white" />}
    </div>
  )
}
