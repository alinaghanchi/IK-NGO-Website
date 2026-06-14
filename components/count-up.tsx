'use client'

import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  motion,
} from 'framer-motion'
import { useEffect, useRef } from 'react'

export function CountUp({
  to,
  suffix = '',
  duration = 2,
}: {
  to: number
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString('en-US'),
  )

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      })
      return controls.stop
    }
  }, [inView, to, duration, count])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
