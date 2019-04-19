import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createGroup, joinGroup } from '../actions';
import { Input, Button, message } from 'antd';
import Loader from 'react-loader-spinner';

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
    } else {
      message.error('Please fill both fields');
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
      <Button onClick={() => useFunctions()}>
        {props.isCreating || props.isJoining ? (
          <Loader type="ThreeDots" color="black" height={40} width={40} />
        ) : (
          props.type
        )}
      </Button>
    </form>
  );
};

const mapStateToProps = ({ createGroupReducer, joinGroupReducer }) => {
  return {
    isCreating: createGroupReducer.isCreating,
    isJoining: joinGroupReducer.isJoining
  };
};

export default connect(
  mapStateToProps,
  { createGroup, joinGroup }
)(AddGroupForm);
