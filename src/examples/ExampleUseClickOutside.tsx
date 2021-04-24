import React, { useState } from 'react'
import { useClickOutside } from '../hooks/useClickOutside'
import { bigRedBox, smallBlueBox } from './styles'

const ExampleUseClickOutside = () => {
  const [showComponent, setShowComponent] = useState(true)

  const handleClickOutside = (isOutside: boolean) => {
    if (isOutside) {
      setShowComponent(false)
    }
  }

  const { ref } = useClickOutside(handleClickOutside)
  // bigRedBox and smallBlueBox are example of styling on the exaples folder on this repository
  return (
    <div style={bigRedBox}>
      <p>Outside component</p>
      {showComponent && (
        <div style={smallBlueBox} ref={ref}>
          component to detect if it's outside
        </div>
      )}
    </div>
  )
}

export default ExampleUseClickOutside
