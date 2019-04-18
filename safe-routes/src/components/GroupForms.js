import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../actions';
import { Input, Button, message } from 'antd';

const AddGroupForm = props => {
  const [groupName, setGroupName] = useState('');
  const [passphrase, setPassphrase] = useState('');

  const id = localStorage.getItem('id');
  const useCreateGroup = info => {
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
      <Button onClick={() => useCreateGroup()}>{props.type}</Button>
    </form>
  );
};

export default connect(
  null,
  { createGroup }
)(AddGroupForm);
