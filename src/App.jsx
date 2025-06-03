import React from "react";

import Home from "components/Home";
import PageNotFound from "components/PageNotFound";
import Product from "components/Product";
import { Route } from "react-router-dom";
import { NavLink, Switch } from "react-router-dom/cjs/react-router-dom.min";

// import Product from "./components/Product";

const App = () => (
  <>
    <NavLink exact activeClassName="underline font-bold" to="/">
      Home
    </NavLink>
    <NavLink exact activeClassName="underline font-bold" to="/product">
      Product
    </NavLink>
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Product} path="/product" />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);

export default App;
