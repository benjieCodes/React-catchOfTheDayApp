import React from "react";
import { BrowserRouter } from "react-router-dom"; // the main router component
import { Switch } from "react-router-dom"; // used to switch the different Route components
import { Route } from "react-router-dom"; // creates the different URL Paths

import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route exact path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
