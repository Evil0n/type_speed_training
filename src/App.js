import styles from './App.module.scss'
import { useState, useEffect, useMemo, useCallback } from 'react'
import cn from 'classnames'
import { Layout, Space, Statistic, Row, Col } from 'antd'
import { useText } from './useText'


const {Content, Header, Footer} = Layout

let interval

function App () {
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



  return (
    <Layout className={styles.Layout}>
      <Header><h1 className={styles.Header}>Тренажер печати</h1>
      </Header>
      <Content className={styles.Content}>
        <Space direction="vertical">
          <div className={styles.Text}>
            <span className={styles.Text__success}>{successText}</span><span
            className={pointerClasses}>{pointerText}</span><span>{restText}</span>
          </div>
          <Space>
            <div className="ant-btn" onClick={handleToggle}>{btnText}</div>
            <div className="ant-btn" onClick={handleStop}>Стоп</div>
          </Space>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Прошло времени" value={timer} suffix="сек"/>
            </Col>
            <Col span={12}>
              <Statistic title="Скорость вашей печати" value={typeSpeed}
                         suffix="символов в минуту"/>
            </Col>
            <Col span={24} style={{marginTop: 32}}>
              <Statistic title="Аккуратность" value={accuracy} suffix="%"/>
            </Col>
          </Row>
        </Space>
      </Content>
      <Footer>Evil0n &copy; 2021</Footer>
    </Layout>
  )
}

export default App
