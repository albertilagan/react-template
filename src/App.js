import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  Home,
  Profile
} from './pages';
import './App.scss';

const PageNotFound = () => {
  return (
    <div>
      Page not found!
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
