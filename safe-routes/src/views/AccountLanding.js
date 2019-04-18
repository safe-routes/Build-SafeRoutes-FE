import React, { useState } from 'react';

import Authenticate from '../auth/Authenticate';
import { Link } from 'react-router-dom';
import { Button, Modal, Row } from 'antd';

const AccountLanding = props => {
  const message = localStorage.getItem('greeting');
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="account-landing">
      <h1>{message}</h1>
      <Row>
        <Button onClick={showModal}>View Data Charts</Button>
      </Row>
      <Modal onCancel={showModal} footer={null} visible={isVisible}>
        <Row>
          <img
            src="https://raw.githubusercontent.com/safe-routes/Build-SafeRoutes-DS/master/graphics/safe-routes1.png"
            alt="data"
          />
          <img
            src="https://raw.githubusercontent.com/safe-routes/Build-SafeRoutes-DS/master/graphics/safe-routes2.png"
            alt="data"
          />
        </Row>
      </Modal>

      <div>
        <Link to="/account">View Account</Link>
        <Link to="/map">See Map</Link>
      </div>
    </div>
  );
};

export default Authenticate(AccountLanding);
