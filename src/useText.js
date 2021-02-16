import {useState, useEffect} from 'react'

export function useText(){
  const [text, setText] = useState('')
  useEffect(() => {
    fetch('https://fish-text.ru/get')
      .then((result) => result.json())
      .then((result) => {
        setText(result.text)
      })
  }, [])
  return text
}
