import {useCallback, useState, useEffect, useMemo} from 'react'

let interval

export function useHandle (text, statistic) {
  const [isStarted, setIsStarted] = useState(false)
  const {setSuccessChr, setPointersErrors, setTimer}=statistic

  const keyBoardListener = useCallback((e) => {
    if (e.key.length !== 1) { return }
    text.setPointer(prevPointer => {
      const success = e.key === text.full[prevPointer]
      setSuccessChr(success)
      if (success) {
        return ++prevPointer
      }
      setPointersErrors((errors) => {

        return [...new Set([...errors, prevPointer])]
      })
      return prevPointer
    })
  }, [text.setPointer, text.full])

  const handlePause = useCallback(
    () => {
      clearInterval(interval)
      window.removeEventListener('keydown', keyBoardListener)
      setIsStarted(false)
    },
    [keyBoardListener, setIsStarted])
  const handleStop = useCallback(() => {
    handlePause()
    text.setPointer(0)
    setSuccessChr(true)
    setPointersErrors([])
    setTimer(0)
  }, [
    handlePause,
    text.setPointer,
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

  useEffect(() => {
    if (text.pointer.number >= text.full.length) {
      handlePause()
    }
  }, [text.full, handlePause, text.pointer.number])

  useEffect(() => {
    return () => handlePause()
  }, [])

  return {
    stop: handleStop,
    toggle: handleToggle,
    isStarted
  }
}
