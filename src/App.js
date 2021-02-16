import styles from './App.module.scss'
import { Layout, Space, Statistic, Row, Col } from 'antd'
import { useSpeedTraining } from './useSpeedTraining'

const {Content, Header, Footer} = Layout

function App () {
  const {
    statistic,
    text,
    pointer,
    handle,
  } = useSpeedTraining()
  return (
    <Layout className={styles.Layout}>
      <Header><h1 className={styles.Header}>Тренажер печати</h1>
      </Header>
      <Content className={styles.Content}>
        <Space direction="vertical">
          <div className={styles.Text}>
            <span className={styles.Text__success}>{text.success}</span><span
            className={pointer.classes}>{pointer.text}</span><span>{text.rest}</span>
          </div>
          <Space>
            <div className="ant-btn" onClick={handle.toggle}>{text.btn}</div>
            <div className="ant-btn" onClick={handle.stop}>Стоп</div>
          </Space>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Прошло времени" value={statistic.timer} suffix="сек"/>
            </Col>
            <Col span={12}>
              <Statistic title="Скорость вашей печати" value={statistic.typeSpeed}
                         suffix="символов в минуту"/>
            </Col>
            <Col span={24} style={{marginTop: 32}}>
              <Statistic title="Аккуратность" value={statistic.accuracy} suffix="%"/>
            </Col>
          </Row>
        </Space>
      </Content>
      <Footer>Evil0n &copy; 2021</Footer>
    </Layout>
  )
}

export default App
