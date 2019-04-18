import React from 'react';
import Authenticate from '../auth/Authenticate';
import GroupForm from '../components/GroupForm';
import { Row } from 'antd';
const Groups = props => {
  return (
    <div className="groups-container">
      <GroupForm />
    </div>
  );
};

export default Authenticate(Groups);
