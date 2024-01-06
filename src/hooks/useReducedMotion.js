import { useState, useEffect } from 'react'

export function useReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)
  
      mediaQuery.addEventListener('change', () => {
        setPrefersReducedMotion(mediaQuery.matches)
      })
  
      // Cleanup
      return () => mediaQuery.removeEventListener('change', () => {})
    }, [])
  
    return prefersReducedMotion
  }
