import { useState, useEffect } from 'react'

interface CanvasColors {
  baseR: number; baseG: number; baseB: number
  endR: number; endG: number; endB: number
  waveStartR: number; waveStartG: number; waveStartB: number
  waveEndR: number; waveEndG: number; waveEndB: number
  particleR: number; particleG: number; particleB: number
}

function readCanvasColors(): CanvasColors {
  const s = getComputedStyle(document.documentElement)
  const v = (name: string, fallback: number) =>
    parseInt(s.getPropertyValue(name).trim()) || fallback
  return {
    baseR: v('--canvas-base-r', 5),
    baseG: v('--canvas-base-g', 15),
    baseB: v('--canvas-base-b', 40),
    endR: v('--canvas-end-r', 35),
    endG: v('--canvas-end-g', 5),
    endB: v('--canvas-end-b', 5),
    waveStartR: v('--canvas-wave-start-r', 10),
    waveStartG: v('--canvas-wave-start-g', 40),
    waveStartB: v('--canvas-wave-start-b', 80),
    waveEndR: v('--canvas-wave-end-r', 120),
    waveEndG: v('--canvas-wave-end-g', 20),
    waveEndB: v('--canvas-wave-end-b', 5),
    particleR: v('--canvas-particle-r', 140),
    particleG: v('--canvas-particle-g', 180),
    particleB: v('--canvas-particle-b', 220),
  }
}

export function useCanvasColors(): CanvasColors {
  const [colors, setColors] = useState(readCanvasColors)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      // Small delay to let CSS vars update
      requestAnimationFrame(() => setColors(readCanvasColors()))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  return colors
}
