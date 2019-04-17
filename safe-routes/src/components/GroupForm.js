import React, { useState } from 'react';
import Authenticate from '../auth/Authenticate';
import { Input, Button } from 'antd';
const GroupForm = props => {
  return (
    <>
      <h3>Add Group</h3>
      <form>
        <Input placeholder="Group Name" />
        <Input placeholder="Group Password" />
        <Button block>Submit Group</Button>
      </form>
    </>
  );
};

export default Authenticate(GroupForm);
