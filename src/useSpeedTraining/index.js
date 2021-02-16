import { useText } from './useText'
import { useState, useEffect } from 'react'
import { useHandle } from './useHandle'
import { useStatistic } from './useStatistic'
import { useControlsMemo } from './useControlsMemo'
import { usePointerClass } from './usePointerClass'

export function useSpeedTraining () {
  const [successChr, setSuccessChr] = useState(true)
  const [isStarted, setIsStarted] = useState(false)
  const [timer, setTimer] = useState(0)
  const [pointerErrors, setPointersErrors] = useState([])
  const [pointer, setPointer] = useState(0)
  const [fullText, setFullText] = useState('')

  const setters = {
    setIsStarted,
    setPointer,
    setPointersErrors,
    setSuccessChr,
    setTimer,
  }

  const text = useText(pointer, fullText, setFullText, isStarted)
  const statistic = useStatistic(text, timer, pointerErrors)
  const {start, pause, stop} = useHandle(fullText, setters)
  const {toggle, btnText} = useControlsMemo(isStarted, start, pause)
  const pointerClasses = usePointerClass(successChr)

  useEffect(() => {
    if (pointer >= text.length) {
      pause()
    }
  }, [text, pause, pointer])

  useEffect(() => {
    return () => pause()
  }, [])

  return {
    text,
    pointerClasses,
    controls: {
      toggle,
      stop,
      btnText,
    },
    statistic,
  }
}
