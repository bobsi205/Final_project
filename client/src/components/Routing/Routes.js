import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alerts from '../layout/Alert';
import Profile from '../profile/Profile';
import NotFound from '../layout/NotFound';
import ProfileEdit from '../profile/ProfileEdit';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = (props) => {
  return (
    <section className="container">
      <Alerts />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/profile/:id" component={Profile} /> */}
        {/*private */}
        <Route exact path="/profile/edit" component={ProfileEdit} />
        {/*private */}
        <Route exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
