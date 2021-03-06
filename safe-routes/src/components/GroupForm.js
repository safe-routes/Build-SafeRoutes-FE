import React, { useState } from 'react';
import Authenticate from '../auth/Authenticate';
import { Route, withRouter } from 'react-router';
import { Button } from 'antd';
import GroupForms from './GroupForms';

const GroupForm = props => {
  const [formType, setFormType] = useState('');
  return (
    <div className="group-form-wrapper">
      <h2>What would you like to do?</h2>
      <Button
        onClick={() => (
          props.history.push('/groups/create'), setFormType('Create')
        )}
      >
        Create a new group
      </Button>
      <Button
        onClick={() => (
          props.history.push('/groups/join'), setFormType('Join')
        )}
      >
        Join an existing group
      </Button>

      <Route
        path="/groups/create"
        render={() => <GroupForms type={formType} />}
      />
      <Route
        path="/groups/join"
        render={() => <GroupForms type={formType} />}
      />
    </div>
  );
};

export default Authenticate(withRouter(GroupForm));
