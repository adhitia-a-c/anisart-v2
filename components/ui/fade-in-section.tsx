"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface FadeInSectionProps {
  children: React.ReactNode
  threshold?: number
  triggerOnce?: boolean
  delay?: number
}

export function FadeInSection({ children, threshold = 0.1, triggerOnce = true, delay = 0 }: FadeInSectionProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  })
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView && elementRef.current) {
      const timer = setTimeout(() => {
        elementRef.current?.classList.add("is-visible")
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [inView, delay])

  return (
    <div ref={ref}>
      <div ref={elementRef} className="fade-in-section">
        {children}
      </div>
    </div>
  )
}
