import React from "react";

import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Company from "./pages/Company/index";
import Graph from "./pages/Company/graph";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/company/graph/:id" component={Graph} />
        <Route path="/company/:id" component={Company} />
        <Route path="/" component={Home} />

        {/* <Route path="/not-found" component={} />
        <Route path="/gerar-etiqueta" component={} />
        <Route path="/picking/:id/caixa" exact component={} />
        <Route path="/picking/:id" component={} />
        <Route path="/picking" component={} />
        <Route path="/" exact component={} />
        <Redirect to="/not-found" /> */}
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
