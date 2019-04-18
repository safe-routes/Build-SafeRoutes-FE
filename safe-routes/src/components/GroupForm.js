import React, { useState } from 'react';
import Authenticate from '../auth/Authenticate';
import { connect } from 'react-redux';
import { createGroup } from '../actions';
import { Input, Button } from 'antd';

const GroupForm = props => {
  const [groupName, setGroupName] = useState('');
  const [passphrase, setPassphrase] = useState('');

  const useCreateGroup = () => {
    const groupInfo = {
      name: groupName,
      passphrase
    };

    props.createGroup(groupInfo);
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

export default Authenticate(
  connect(
    null,
    { createGroup }
  )(GroupForm)
);
