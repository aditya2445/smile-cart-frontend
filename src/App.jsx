import React from "react";

import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product";
import ProductList from "components/ProductList";
import { Route } from "react-router-dom";
import {
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

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
      <Route exact component={ProductList} path="/products" />
      <Route exact component={Product} path="/products/:slug" />
      <Redirect exact from="/" to="/products" />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);

export default App;
