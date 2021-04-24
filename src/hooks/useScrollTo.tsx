/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'
import useWindow from './useWindow'

type UseScrollToProps = {
  elementRef: any
  scrollToSection: VoidFunction
  scrollSmoothly: VoidFunction
}

export const useScrollTo = (): UseScrollToProps => {
  const elementRef = useRef<any>(null)
  const { window } = useWindow()
  const scrollToSection = () => elementRef.current.scrollIntoView()
  const scrollSmoothly = () => window.scrollTo(0, elementRef.current.offsetTop)
  return {
    elementRef,
    scrollToSection,
    scrollSmoothly,
  } as UseScrollToProps
}
