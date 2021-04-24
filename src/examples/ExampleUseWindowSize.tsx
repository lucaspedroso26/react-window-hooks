import React from 'react'
import { useWindowSize } from '../hooks'

export const ExampleUseWindowSize = () => {
  const { width, height } = useWindowSize()
  return (
    <>
      <div>height: {height}px</div>
      <div>width: {width}px</div>
    </>
  )
}

export default ExampleUseWindowSize
