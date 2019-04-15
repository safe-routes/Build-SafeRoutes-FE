import React, { Component } from 'react';
import './App.scss';

// Style imports
import { Container } from './styles'

//Component imports
import Login from './views/Login'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Container>
        <Route path='/login' component={ Login } />
        <Link to='/login'>Login</Link>
      </Container>
    );
  }
}

export default App;
