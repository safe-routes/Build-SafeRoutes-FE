import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { slide as Menu } from 'react-burger-menu';

const HamburgerNav = props => {
  const logOut = () => {
    localStorage.clear();
    props.history.push('/');
  };

  return (
    <Menu>
      <Link to="/account-landing" className="menu-item">
        Home
      </Link>
      <Link to="/account" className="menu-item">
        Account
      </Link>
      <Link to="/map" className="menu-item">
        Map
      </Link>
      <Link to="/groups" className="menu-item">
        Groups
      </Link>
      <Link onClick={() => logOut()} to="account-landing" className="menu-item">
        Logout
      </Link>
    </Menu>
  );
};

export default withRouter(HamburgerNav);
