import React from "react";
import Landing from "./pages/Landing";
import Receiver from "./pages/Receiver";
import Initial from "./pages/Initial";
import Provider from "./pages/Provider";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Initial />} />
      <Route path="/login" component={() => <Login />} />
      <Route path="/register" component={() => <Register />} />
      <Route path="/landing" component={() => <Landing />} />
      <Route path="/receiver" component={() => <Receiver />} />
      <Route path="/provider" component={() => <Provider />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
