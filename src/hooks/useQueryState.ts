import { ParseOptions, parse, stringify } from 'query-string'
import { useDebugValue } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export default function useQueryState<T = string>(
  key: string,
  defaultValue?: T,
  options?: ParseOptions
): [T, (value: T) => void] {
  useDebugValue('Query State')
  const history = useHistory()
  const location = useLocation()

  return [
    (parse(location.search, options) as any)[key] ?? defaultValue,
    (value: T) => {
      const search: any = parse(history.location.search, options)

      if (!!value) {
        search[key] = value
      } else {
        delete search[key]
      }
      history.replace(history.location.pathname + '?' + stringify(search))
    },
  ]
}
