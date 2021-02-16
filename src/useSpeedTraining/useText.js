import { useState, useEffect, useMemo } from 'react'

export function useText () {
  const [pointer, setPointer] = useState(0)
  const [fullText, setFullText] = useState('')

  const successText = useMemo(() => fullText.slice(0,
    pointer), [fullText, pointer])
  const restText = useMemo(() => fullText.slice(pointer + 1, fullText.length),
    [fullText, pointer])

  const pointerText = useMemo(() => fullText[pointer], [fullText, pointer])

  useEffect(() => {
    fetch('https://fish-text.ru/get')
      .then((result) => result.json())
      .then((result) => {
        setFullText(result.text)
      })
  }, [])
  return {
    setPointer,
    pointer: {
      text: pointerText,
      number: pointer,
    },
    full: fullText,
    success: successText,
    rest: restText,
  }
}
