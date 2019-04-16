import React from "react";
import { connect } from "react-redux";
import Authenticate from "../auth/Authenticate";
import { Typography, Row, Col, Input, Button } from "antd";

const { Title } = Typography;
const Profile = props => {
  const message = localStorage.getItem("greeting");

  return (
    <div>
      <Title level={2}>{message}</Title>
      <Row>
        <Col xs={{ span: 20 }}>
          <Input placeholder="Update Username" />
          <Button block type="danger">
            Delete Account
          </Button>
        </Col>
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
