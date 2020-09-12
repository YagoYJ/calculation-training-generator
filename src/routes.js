import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Sum from "./pages/Sum";
import Subtraction from "./pages/Subtraction";
import Multiplication from "./pages/Multiplication";
import Division from "./pages/Division";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sum" component={Sum} />
        <Route path="/subtraction" component={Subtraction} />
        <Route path="/multiplication" component={Multiplication} />
        <Route path="/division" component={Division} />
      </Switch>
    </BrowserRouter>
  );
}
