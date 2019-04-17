import React, { useState } from "react";

import Authenticate from "../auth/Authenticate";
import { Link } from "react-router-dom";

const AccountLanding = props => {
  const message = localStorage.getItem("greeting");

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
