import React from "react";
import Landing from "./pages/Landing";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Landing />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
