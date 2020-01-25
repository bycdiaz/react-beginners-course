import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker.js'
import App from './App.js'
import NotFound from './NotFound.js';

const Router = () => (
  <BrowserRouter>
    <switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </switch>
  </BrowserRouter>
);

export default Router;
