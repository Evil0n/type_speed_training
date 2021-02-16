import { useMemo } from 'react'

export function useStatistic (text, timer, pointerErrors) {
  const typeSpeed = useMemo(() => {
    const time = timer || 1
    return ((text.success.length / time) * 60).toFixed(0)
  }, [timer, text.success])
  const accuracy = useMemo(() => {
    return ((1 - (pointerErrors.length / text.full.length)) * 100).toFixed(1)
  }, [pointerErrors, text.full])

  return {
    accuracy,
    typeSpeed,
    timer
  }
}
