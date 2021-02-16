import { useMemo } from 'react'

export function useControlsMemo (isStarted, handleStart, handlePause) {
  const handleToggle = useMemo(() => {
    return isStarted ? handlePause : handleStart
  }, [handleStart, handlePause, isStarted])

  const btnText = useMemo(() => {
    return isStarted ? 'Пауза' : 'Старт'
  }, [isStarted])

  return {
    toggle: handleToggle,
    btnText,
  }
}
