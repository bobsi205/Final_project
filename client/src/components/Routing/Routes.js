import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alerts from '../layout/Alert';
import Profile from '../profile/Profile';
import NotFound from '../layout/NotFound';
import ProfileEdit from '../profile/ProfileEdit';
import PrivateRoute from './PrivateRoute';
import About from '../layout/footer/About';
import FAQ from '../layout/footer/Faq';
import Summary from '../summary/Summary';
import Upload from '../summary/upload/Upload';

const Routes = (props) => {
  return (
    <section className="container">
      <Alerts />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/summaryUpload" component={Upload} />
        {/* <Route exact path="/profile/:id" component={Profile} /> */}
        <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
