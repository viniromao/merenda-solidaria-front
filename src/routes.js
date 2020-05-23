import React from "react";
import Landing from "./pages/Landing";
import Receiver from "./pages/Receiver";
import Initial from "./pages/Initial";
import Provider from "./pages/Provider";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Initial />} />
      <Route exact path="/landing" component={() => <Landing />} />
      <Route path="/receiver" component={() => <Receiver />} />
      <Route path="/provider" component={() => <Provider />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
