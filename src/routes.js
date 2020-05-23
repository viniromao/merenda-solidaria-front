import React from "react";
import Landing from "./pages/Landing";
import Receiver from "./pages/Receiver";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Landing />} />
      <Route path="/receiver" component={() => <Receiver />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
