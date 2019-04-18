import React, { useState, useEffect } from 'react';
import Authenticate from '../auth/Authenticate';
import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createGroup } from '../actions';
import { Input, Button, message } from 'antd';
import AddGroupForm from './AddGroupForm';

const GroupForm = props => {
  const [userGroups, setGroups] = useState([]);

  console.log(props);
  return (
    <div className="group-form-wrapper">
      <h2>What would you like to do?</h2>
      <Button onClick={() => props.history.push('groups/create')}>
        Create a new group
      </Button>
      <Button>Join an existing group</Button>

      <Route path="/groups/create" component={AddGroupForm} />
    </div>
  );
};

export default Authenticate(withRouter(GroupForm));
