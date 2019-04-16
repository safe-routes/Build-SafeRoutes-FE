import React from "react";
import { connect } from "react-redux";
import Authenticate from "../auth/Authenticate";
import { deleteUser } from "../actions";
import { color_pallete } from "../styles";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import { Typography, Row, Col, Input, Button, Popconfirm, message } from "antd";
const { Title } = Typography;

const Profile = props => {
  const greetMessage = localStorage.getItem("greeting");
  const id = localStorage.getItem("id");

  const useDelete = id => {
    props
      .deleteUser(id)
      .then(message.success("User Removed"))
      .then(props.history.push("/"));
  };

  const cancel = () => {
    message.error("Canceled");
  };

  return (
    <div>
      <Title level={2}>{greetMessage}</Title>
      <Row>
        <Col xs={{ span: 100 }}>
          <Input placeholder="Update Username" />
        </Col>

        <Popconfirm
          title="Are you sure you want to delete this account? All data will be removed"
          onConfirm={() => useDelete(id)}
          onCancel={cancel}
        >
          <Button block type="danger">
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
        </Popconfirm>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ deleteUserReducer }) => {
  return { isDeleting: deleteUserReducer.isDeleting };
};
export default Authenticate(
  withRouter(
    connect(
      mapStateToProps,
      { deleteUser }
    )(Profile)
  )
);
