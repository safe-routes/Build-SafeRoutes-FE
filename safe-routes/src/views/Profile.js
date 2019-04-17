import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Authenticate from "../auth/Authenticate";
import { deleteUser, updateUser } from "../actions";
import { withRouter } from "react-router-dom";
import { Typography, Row, Col, Input, Button, Popconfirm, message } from "antd";
const { Title } = Typography;

const Profile = props => {
  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");
  const [updatingUser, setUpdatingUser] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const greetMessage = localStorage.getItem("greeting");
  const id = localStorage.getItem("id");
  const username = localStorage.getItem("username");

  const useDelete = () => {
    props
      .deleteUser({ username, password }, id)
      .then(message.success("User Removed"))
      .then(props.history.push("/"));
  };

  const useUpdate = () => {
    const newUser = {
      username,
      newUsername,
      password
    };
    if (newUsername && password) {
      props
        .updateUser(id, newUser)
        .then(
          () => (
            localStorage.setItem("username", newUsername),
            localStorage.setItem("greeting", `Welcome, ${newUsername}`)
          )
        )
        .then(() => message.success("Username updated."));
      setNewUsername("");
      setPassword("");
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
            value={newUsername}
            onChange={e => setNewUsername(e.target.value)}
          />
          {updatingUser && newUsername ? (
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
        <Button
          onClick={() => (isDeleting ? useDelete() : setIsDeleting(true))}
          block
          type="danger"
        >
          Delete User
        </Button>
        {isDeleting ? (
          <Input
            placeholder="Enter Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        ) : (
          ""
        )}
      </Row>
    </div>
  );
};

const mapStateToProps = ({ deleteUserReducer, updateUserReducer }) => {
  return {
    isDeleting: deleteUserReducer.isDeleting,
    isUpdating: updateUserReducer.isUpdating,
    message: updateUserReducer.message,
    username: updateUserReducer.username
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
