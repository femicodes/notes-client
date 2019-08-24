import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Dashboard from './Dashboard/Dashboard';
import 'circular-std';
import '../css/Main.scss';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/auth/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route path="/store/:storeId" component={App} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;