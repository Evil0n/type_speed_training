import { useCallback } from 'react'

let interval

export function useHandle (text, setters) {
  const {
    setIsStarted,
    setPointer,
    setPointersErrors,
    setSuccessChr,
    setTimer,
  } = setters
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

  return {
    stop: handleStop,
    pause: handlePause,
    start: handleStart,
  }
}
