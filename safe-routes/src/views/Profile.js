import React from "react";
import { connect } from "react-redux";
import Authenticate from "../auth/Authenticate";
import { deleteUser } from "../actions";
import { color_pallete } from "../styles";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import { Typography, Row, Col, Input, Button } from "antd";
const { Title } = Typography;

const Profile = props => {
  const message = localStorage.getItem("greeting");
  const id = localStorage.getItem("id");

  const useDelete = id => {
    props.deleteUser(id).then();
  };
  return (
    <div>
      <Title level={2}>{message}</Title>
      <Row>
        <Col xs={{ span: 20 }}>
          <Input placeholder="Update Username" />

          <Button onClick={() => useDelete(id)} block type="danger">
            {props.isDeleting ? (
              <Loader
                type="ThreeDots"
                color={color_pallete.accent_3}
                height="50"
                width="50"
              />
            ) : (
              "Delete User"
            )}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ deleteUserReducer }) => {
  return { isDeleting: deleteUserReducer.isDeleting };
};
export default Authenticate(
  connect(
    mapStateToProps,
    { deleteUser }
  )(Profile)
);
