import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import App from '../App';
import 'circular-std';
import '../css/Main.scss';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route path="/store/:storeId" component={App} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;