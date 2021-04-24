import React from 'react'
import { useScrollTo } from '../hooks'
import { bigSectionToScroll } from './styles'

const ExampleUseScrollTo = () => {
  const { elementRef, scrollToSection, scrollSmoothly } = useScrollTo()

  const goesDirectToTheSection = (event: any) => {
    event.preventDefault()
    scrollToSection()
  }

  const goesScrollingSmoothlyToSection = (event: any) => {
    event.preventDefault()
    scrollSmoothly()
  }

  return (
    <>
      <div ref={elementRef}>component to be scrolled into </div>;
      <div style={bigSectionToScroll}>go to the bottom of this section</div>
      <button onClick={goesDirectToTheSection}>Goes direct to</button>
      <button onClick={goesScrollingSmoothlyToSection}>Scroll Smoothly</button>
    </>
  )
}

export default ExampleUseScrollTo
