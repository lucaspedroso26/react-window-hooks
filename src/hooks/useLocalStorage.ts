import { useState } from 'react'

export function getParsedLocalStorageItem<T>(
  key: string,
  initialValue = {} as T
) {
  const item = window.localStorage.getItem(key)
  return item ? JSON.parse(item) : initialValue
}

const useLocalStorageState = <T = {}>(
  key: string,
  initialValue = {} as T
): [T, Function] => {
  const [storedValue, setStoredValue = () => {}] = useState<T>(() => {
    try {
      return getParsedLocalStorageItem<T>(key, initialValue)
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }
  const localStorageState: [T, Function] = [storedValue, setValue]

  return localStorageState
}

export default useLocalStorageState
