import { useText } from './useText'
import styles from './App.module.scss'
import cn from 'classnames'
import { useState, useEffect, useMemo, useCallback } from 'react'

let interval

export function useSpeedTraining() {

  const text = useText()
  const [pointer, setPointer] = useState(0)
  const [successChr, setSuccessChr] = useState(true)
  const [timer, setTimer] = useState(0)
  const [pointerErrors, setPointersErrors] = useState([])
  const [isStarted, setIsStarted] = useState(false)

  const successText = useMemo(() => text.slice(0,
    pointer), [text, pointer])
  const pointerText = useMemo(() => text[pointer], [text, pointer])
  const restText = useMemo(() => text.slice(pointer + 1, text.length),
    [text, pointer])
  const pointerClasses = useMemo(() => {
    const classes = [
      styles.Text__pointer,
    ]
    if (!successChr) {
      classes.push(styles.Text__pointer_error)
    }
    return cn(classes)
  }, [successChr])
  const typeSpeed = useMemo(() => {
    const time = timer || 1
    return ((successText.length / time) * 60).toFixed(0)
  }, [timer, successText])
  const accuracy = useMemo(() => {
    return ((1 - (pointerErrors.length / text.length)) * 100).toFixed(1)
  }, [pointerErrors, text])

  const keyBoardListener = useCallback((e) => {
    if (e.key.length !== 1) { return }
    setPointer(prevPointer => {
      const success = e.key === text[prevPointer]
      setSuccessChr(success)
      if (success) {
        return ++prevPointer
      }
      setPointersErrors((errors) => {

        return [...new Set([...errors, prevPointer])]
      })
      return prevPointer
    })
  }, [setPointer, text])

  const handlePause = useCallback(
    () => {
      clearInterval(interval)
      window.removeEventListener('keydown', keyBoardListener)
      setIsStarted(false)
    },
    [keyBoardListener, setIsStarted])
  const handleStop = useCallback(() => {
    handlePause()
    setPointer(0)
    setSuccessChr(true)
    setPointersErrors([])
    setTimer(0)
  }, [
    handlePause,
    setPointer,
    setSuccessChr,
    setPointersErrors,
    setTimer])
  const handleStart = useCallback(
    () => {
      handlePause()
      setIsStarted(true)
      interval = setInterval(() => {
        setTimer((timer) => {
          return ++timer
        })
      }, 1000)
      window.addEventListener('keydown', keyBoardListener)
    }, [handlePause, keyBoardListener, setIsStarted])

  const handleToggle = useMemo(() => {
    return isStarted ? handlePause : handleStart
  }, [handleStart, handlePause, isStarted])
  const btnText = useMemo(() => {
    return isStarted ? 'Пауза' : 'Старт'
  }, [isStarted])

  useEffect(() => {
    if (pointer >= text.length) {
      handlePause()
    }
    console.log(pointer, text.length)
  }, [text, handlePause, pointer])

  useEffect(() => {
    return () => handlePause()
  }, [])

  return {pointerClasses, pointerText, restText, handleToggle, btnText, handleStop, timer, typeSpeed, accuracy, successText}
}
