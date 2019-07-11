import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateUser from './auth/createUser';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CreateUser} />
        </div>
      </Router>
    );
  }
}

export default App;
