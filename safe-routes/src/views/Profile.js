import React, { useState } from "react";
import { connect } from "react-redux";
import Authenticate from "../auth/Authenticate";
import { deleteUser, updateUser } from "../actions";
import { withRouter } from "react-router-dom";
import { Typography, Row, Col, Input, Button, Popconfirm, message } from "antd";
const { Title } = Typography;

const Profile = props => {
  const greetMessage = localStorage.getItem("greeting");
  const id = localStorage.getItem("id");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [updatingUser, setUpdatingUser] = useState(false);

  const useDelete = () => {
    props
      .deleteUser(id)
      .then(message.success("User Removed"))
      .then(props.history.push("/"));
  };

  const useUpdate = () => {
    if (username && password) {
      props.updateUser(id, { username, password });
    } else {
      message.error("Please fill in both fields");
    }
  };

  const cancel = () => {
    message.error("Canceled");
  };

  return (
    <div>
      <Title level={2}>{greetMessage}</Title>
      <Row>
        <Col xs={{ span: 50 }}>
          <Input
            placeholder="Update Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {updatingUser && username ? (
            <Input
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          ) : (
            ""
          )}
          <Button
            onClick={() => (updatingUser ? useUpdate() : setUpdatingUser(true))}
            block
          >
            Update User
          </Button>
        </Col>
        <Popconfirm
          title="Are you sure you want to delete this account? All data will be removed"
          onConfirm={() => useDelete()}
          onCancel={cancel}
        >
          <Button block type="danger">
            Delete User
          </Button>
        </Popconfirm>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ deleteUserReducer, updateUserReducer }) => {
  return {
    isDeleting: deleteUserReducer.isDeleting,
    isUpdating: updateUserReducer.isUpdating
  };
};
export default Authenticate(
  withRouter(
    connect(
      mapStateToProps,
      { deleteUser, updateUser }
    )(Profile)
  )
);
