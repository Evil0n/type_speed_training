import { useText } from './useText'
import styles from '../App.module.scss'
import cn from 'classnames'
import { useState, useMemo } from 'react'
import { useHandle } from './useHandle'
import {useStatistic} from './useStatistic'

export function useSpeedTraining () {
  const [successChr, setSuccessChr] = useState(true)

  const text = useText()
  const statistic = useStatistic(text)
  const handle = useHandle(text, {setSuccessChr, ...statistic})

  const btnText = useMemo(() => {
    return handle.isStarted ? 'Пауза' : 'Старт'
  }, [handle.isStarted])

  const pointerClasses = useMemo(() => {
    const classes = [
      styles.Text__pointer,
    ]
    if (!successChr) {
      classes.push(styles.Text__pointer_error)
    }
    return cn(classes)
  }, [successChr])

  return {
    text: {...text, btn: btnText},
    pointer: {
      ...text.pointer,
      classes: pointerClasses,
    },
    handle,
    statistic
  }
}
