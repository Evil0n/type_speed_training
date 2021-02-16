import styles from './App.module.scss'
import { Layout, Space, Statistic, Row, Col } from 'antd'
import { useSpeedTraining } from './useSeedTraining'

const {Content, Header, Footer} = Layout

function App () {
  const {
    pointerClasses,
    pointerText,
    restText,
    handleToggle,
    btnText,
    handleStop,
    timer,
    typeSpeed,
    accuracy,
    successText,
  } = useSpeedTraining()
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
