import React, { useState, useEffect } from 'react';
import Authenticate from '../auth/Authenticate';
import { connect } from 'react-redux';
import { createGroup } from '../actions';
import { Input, Button, message } from 'antd';

const GroupForm = props => {
  const [groupName, setGroupName] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [userGroups, setGroups] = useState([]);

  const id = localStorage.getItem('id');
  const useCreateGroup = () => {
    const groupInfo = {
      name: groupName,
      passphrase,
      user_id: id
    };

    passphrase && groupName
      ? props.createGroup(groupInfo)
      : message.error('Please fill in both fields');
  };

  return (
    <>
      <h3>Create A New Group</h3>
      <form>
        <Input
          value={groupName}
          onChange={e => setGroupName(e.target.value)}
          placeholder="Group Name"
        />
        <Input
          value={passphrase}
          onChange={e => setPassphrase(e.target.value)}
          placeholder="Group Password"
          type="password"
        />
        <Button onClick={() => useCreateGroup()} block>
          Create Group
        </Button>
      </form>
    </>
  );
};

const mapStateToProps = ({ createGroupReducer }) => {
  return {
    message: createGroupReducer.message,
    groups: createGroupReducer.groupName
  };
};
export default Authenticate(
  connect(
    null,
    { createGroup }
  )(GroupForm)
);
