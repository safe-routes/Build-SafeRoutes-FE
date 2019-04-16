import React from 'react';
import { connect } from 'react-redux';
import Authenticate from '../auth/Authenticate';
import { Typography, Row, Col, Input } from 'antd';

const { Title } = Typography;
const Profile = props => {
  const message = localStorage.getItem('greeting');

  return (
    <div>
      <Title level={2}>{message}</Title>
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Input placeholder="Update Username" />
        </Col>
        <Col xs={{ span: 8, offset: 4 }}>Delete Account</Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
};
export default Authenticate(
  connect(
    mapStateToProps,
    {}
  )(Profile)
);
