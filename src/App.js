import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CreateUser from './auth/createUser';
import ListEvents from './events/ListEvents';
import Event from './events/Event';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ListEvents/">List Events</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
          <Route exact path="/" component={CreateUser} />
          <Route exact path="/ListEvents" component={ListEvents} />
          <Route exact path="/Event" component={Event} />
        </div>
      </Router>
    );
  }
}

export default App;
