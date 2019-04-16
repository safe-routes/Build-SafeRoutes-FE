import React, { useState } from "react";
import { connect } from "react-redux";
import Authenticate from "../auth/Authenticate";
import { deleteUser } from "../actions";
import { color_pallete } from "../styles";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import { Typography, Row, Col, Input, Button, Popconfirm, message } from "antd";
const { Title } = Typography;

const Profile = props => {
  const [deleteForm, triggerDeleteForm] = useState(false);
  const [password, setPassword] = useState("");
  const greetMessage = localStorage.getItem("greeting");
  const id = localStorage.getItem("id");
  const username = localStorage.getItem('username')
  const useDelete = () => {
    const user = {
      username,
      password
    };
    props
      .deleteUser({
        "username": "lappjeff",
        "password": "asdfasdf"
      })
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
          <Button block>Update User</Button>
        </Col>

        <Button
          onClick={
            deleteForm ? () => useDelete() : () => triggerDeleteForm(true)
          }
          block
          type="danger"
        >
          {props.isDeleting ? (
            <Loader
              type="ThreeDots"
              color={color_pallete.accent_3}
              height="30"
              width="30"
            />
          ) : (
            "Delete User"
          )}
        </Button>
        {deleteForm ? (
          <>
            <Input
              placeholder="Enter Password To Remove Account"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </>
        ) : null}
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

// <Popconfirm
//   title="Are you sure you want to delete this account? All data will be removed"
//   onConfirm={() => useDelete(id)}
//   onCancel={cancel}
// >
// </Popconfirm>
