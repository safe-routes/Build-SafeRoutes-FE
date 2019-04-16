import React, { Component } from 'react';
import './App.scss';

// Style imports
import { Container } from './styles';

//Component imports
import Login from './views/Login';
import AccountLanding from './views/AccountLanding';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/" component={Login} />
        <Route path="/account" component={AccountLanding} />
      </Container>
    );
  }
}

export default App;
