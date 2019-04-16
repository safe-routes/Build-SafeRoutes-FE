import React, { useEffect, useState } from 'react';

import Authenticate from '../auth/Authenticate';
import axios from 'axios';
import { connect } from 'react-redux';

const AccountLanding = props => {
  const [message, setMessage] = useState(localStorage.getItem('greeting'));
  return <div>{message}</div>;
};

export default Authenticate(AccountLanding);
