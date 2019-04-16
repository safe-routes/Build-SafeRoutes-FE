import React from 'react'
import { connect } from 'react-redux'
import Authenticate from '../auth/Authenticate'
import { Typography, Row, Col } from 'antd'


const { Title } = Typography
const Profile = props => {

  const message = localStorage.getItem('greeting')

  return (
    <div>
    <Title level={2}>{message}</Title>
    <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Update Username</Col>
      <Col xs={{ span: 5, offset: 4 }} lg={{ span: 6, offset: 2 }}>Delete Account</Col>
    </Row>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
}
export default Authenticate(
  connect(mapStateToProps, {})(Profile)
)
