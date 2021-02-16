import { useEffect, useMemo } from 'react'

export function useText (pointer, fullText, setFullText ) {
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
    full: fullText,
    pointer: pointerText,
    success: successText,
    rest: restText,
  }
}
