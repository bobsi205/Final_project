import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Profile from '../profile/Profile';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/profile" component={Profile} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
