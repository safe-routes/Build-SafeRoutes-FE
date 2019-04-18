import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
//Antd components
import { Typography, Row, Col, Input, Button } from 'antd';
const { Title } = Typography;

const Account = props => {
  const [updatingUser, setUpdatingUser] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [greetMessage, setGreetMessage] = useState('');

  useEffect(() => setGreetMessage(localStorage.getItem('greeting')));

  return (
    <div>
      <Title level={1}>Account Settings</Title>

      <Row>
        <Col xs={{ span: 50 }}>
          <Input
            placeholder="Update Username"
            value={props.newUsername}
            onChange={e => props.setNewUsername(e.target.value)}
          />
          {updatingUser && props.newUsername ? (
            <Input
              placeholder="Enter Password"
              value={props.password}
              onChange={e => props.setPassword(e.target.value)}
              type="password"
            />
          ) : (
            ''
          )}
          <Button
            onClick={() =>
              updatingUser ? props.useUpdate() : setUpdatingUser(true)
            }
            block
          >
            Update User
          </Button>
        </Col>

        <Button
          onClick={() => (isDeleting ? props.useDelete() : setIsDeleting(true))}
          block
          type="danger"
        >
          Delete User
        </Button>
        {isDeleting ? (
          <Input
            placeholder="Enter Password"
            value={props.password}
            onChange={e => props.setPassword(e.target.value)}
            type="password"
          />
        ) : (
          ''
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

export default connect(
  mapStateToProps,
  {}
)(Account);
