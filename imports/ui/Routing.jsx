import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Splash from './Splash/Splash';
import Lan from './Lan/Lan';
import CreateLan from './Lan/CreateLan';
import LanPage from './Lan/LanPage';
import PrivateRoute from './PrivateRotue';

const fourohfour = () => <h1>404</h1>;

const Routing = props => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" render={() => (props.currentUser ? <Redirect to="/lan" /> : <Splash />)} />
        <PrivateRoute exact path="/lan" component={Lan} />
        <PrivateRoute exacct path="/lan/create" component={CreateLan} />
        <PrivateRoute exact path="/lan/id/:id" component={LanPage} />
        <Route component={fourohfour} />
      </Switch>
    </div>
  </Router>
);

Routing.defaultProps = {
  currentUser: undefined,
};

Routing.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any),
};

export default Routing;
