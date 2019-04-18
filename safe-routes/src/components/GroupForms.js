import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createGroup, joinGroup } from '../actions';
import { Input, Button, message } from 'antd';

const AddGroupForm = props => {
  const [groupName, setGroupName] = useState('');
  const [passphrase, setPassphrase] = useState('');

  const id = localStorage.getItem('id');

  const groupInfo = {
    name: groupName,
    passphrase,
    user_id: id
  };

  const useFunctions = () => {
    if (passphrase && groupName) {
      props.type === 'Create'
        ? props.createGroup(groupInfo)
        : props.joinGroup(groupInfo);
    }
    setPassphrase('');
    setGroupName('');
  };

  return (
    <form className="group-form">
      <h3>{props.type === 'Create' ? 'Create Group' : 'Join Group'}</h3>
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
      <Button onClick={() => useFunctions()}>{props.type}</Button>
    </form>
  );
};

export default connect(
  null,
  { createGroup, joinGroup }
)(AddGroupForm);
