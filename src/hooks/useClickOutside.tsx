/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'

type useClickOutsideProps = {
  ref: any
}

export interface HandleClickOutsideI {
  (isOutside: boolean): void
}

export function useClickOutside(
  handleIsOutSide: HandleClickOutsideI
): useClickOutsideProps {
  const ref = useRef<any>(null)
  const handleClickOutside = (event: any) => {
    handleIsOutSide(ref.current && !ref.current.contains(event.target))
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })
  return { ref }
}
