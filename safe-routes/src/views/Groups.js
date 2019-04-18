import React from 'react';
import Authenticate from '../auth/Authenticate';
import GroupForm from '../components/GroupForm';
const Groups = props => {
  return (
    <div className="groups-container">
      <GroupForm />
    </div>
  );
};

export default Authenticate(Groups);
