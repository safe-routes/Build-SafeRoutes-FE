import React, { Component } from 'react';
import './App.scss';

// Style imports
import { Container } from './styles'

//Component imports
import Login from './views/Login'
import AccountLanding from './views/AccountLanding'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path='/' component={Login} />
        <Route path='/account-landing' component={AccountLanding} />
        
      </Container>
    );
  }
}

export default App;
