import { useState, useEffect } from 'react'

type WindowSiseState = {
  width: number | undefined
  height: number | undefined
}

export function useWindowSize(): WindowSiseState {
  const [windowSize, setWindowSize] = useState<WindowSiseState>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
