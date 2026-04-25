interface Props {
  text: string
  speed?: number
  className?: string
  trackClassName?: string
}

export default function Marquee({ text, speed = 30, className, trackClassName }: Props) {
  const repeated = `${text} ${text} `
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ''}`}>
      <div
        className={`inline-block marquee-track ${trackClassName ?? ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeated}
        {repeated}
      </div>
    </div>
  )
}
