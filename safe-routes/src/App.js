import React, { Component } from 'react';
import './App.scss';

// Style imports
import { Container } from './styles';

//Component imports
import Login from './views/Login';
import AccountLanding from './views/AccountLanding';
import { Route } from 'react-router-dom';
import Profile from './views/Profile';
import Nav from './components/Nav';
import Groups from './views/Groups';
import MapComponent from './components/map/MapComponent';
require('dotenv').config();
class App extends Component {
  render() {
    return (
      <Container>
        <Nav />
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
      </Container>
    );
  }
}

export default App;
