import React, { useState } from "react";

import Cart from "components/cart";
import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product";
import ProductList from "components/ProductList";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import routes from "routes";

import CartItemsContext from "./contexts/CartItemsContext";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      {/* <div className="flex space-x-2">
        <NavLink exact activeClassName="underline font-bold" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="underline font-bold" to="/product">
          Product
        </NavLink>
      </div> */}
      <CartItemsContext.Provider value={[cartItems, setCartItems]}>
        <Switch>
          <Route exact component={Product} path={routes.products.show} />
          <Route exact component={ProductList} path={routes.products.index} />
          <Route exact component={Cart} path={routes.cart} />
          <Redirect exact from={routes.root} to={routes.products.index} />
          <Route component={PageNotFound} path="*" />
        </Switch>
      </CartItemsContext.Provider>
    </>
  );
};
export default App;
