import React from 'react'
import { useWindow } from '../hooks'

const ExampleUseWindow = () => {
  const { window } = useWindow()

  // for NEXTJS - shows window object without breaking process
  console.log(window)

  return <div>My Content Here</div>
}

export default ExampleUseWindow
