import styles from '../App.module.scss'
import cn from 'classnames'
import {useMemo} from 'react'

export function usePointerClass (successChr) {
  return useMemo(() => {
    const classes = [
      styles.Text__pointer,
    ]
    if (!successChr) {
      classes.push(styles.Text__pointer_error)
    }
    return cn(classes)
  }, [successChr])
}
