import React, { useEffect, useState } from 'react';

import Authenticate from '../auth/Authenticate';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AccountLanding = props => {
  const [message, setMessage] = useState(localStorage.getItem('greeting'));
  return (
    <div className="account-landing">
      <h1>{message}</h1>
      <div>
        <Link to="/account">View Account</Link>
        <Link to="/map">See Map</Link>
      </div>
    </div>
  );
};

export default Authenticate(AccountLanding);
