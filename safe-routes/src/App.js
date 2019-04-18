import React, { useState } from 'react';

// Style imports
// import { Container } from './styles';

//Component imports
import Login from './views/Login';
import AccountLanding from './views/AccountLanding';
import { Route } from 'react-router-dom';
import Profile from './views/Profile';
import Nav from './components/Nav';
import HamburgerNav from './components/HamburgerNav';
import Groups from './views/Groups';
import MapComponent from './components/map/MapComponent';
require('dotenv').config();
const App = props => {
  const [width, setWidth] = useState(window.innerWidth);

  const getWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', getWindowWidth);

  return (
    <div className="page-wrapper">
      {width > 820 ? <Nav /> : <HamburgerNav />}
      <Route
        exact
        path="/"
        render={() =>
          localStorage.getItem('token') ? <AccountLanding /> : <Login />
        }
      />
      <Route path="/account-landing" component={AccountLanding} />
      <Route path="/account" component={Profile} />
      <Route path="/groups" component={Groups} />
      <Route path="/map" component={MapComponent} />
    </div>
  );
};

export default App;
