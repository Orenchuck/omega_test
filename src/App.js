import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Main from './Main';
import Inner from './Inner';
import './App.css';

class App extends Component {
  render() {
    const { history } = this.props
  return (
        <div className="App">
          <Switch>
            <Route history={history} exact path='/omega_test' component={Main} />
            <Route history={history} path='/inner' component={Inner} />
          </Switch>
        </div>
  );
}
}

export default withRouter(App)
