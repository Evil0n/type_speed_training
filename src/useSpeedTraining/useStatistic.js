import {useState, useMemo} from 'react'

export function useStatistic (text) {
  const [timer, setTimer] = useState(0)
  const [pointerErrors, setPointersErrors] = useState([])

  const typeSpeed = useMemo(() => {
    const time = timer || 1
    return ((text.success.length / time) * 60).toFixed(0)
  }, [timer, text.success])
  const accuracy = useMemo(() => {
    return ((1 - (pointerErrors.length / text.full.length)) * 100).toFixed(1)
  }, [pointerErrors, text.full])

  return {
    timer,
    setTimer,
    setPointersErrors,
    accuracy,
    typeSpeed
  }
}
