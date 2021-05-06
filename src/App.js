import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar/navbar";
import Shop from "./components/shop/shop";
import { Route } from "react-router-dom";

import Cart from "./components/cart/cart";
import Order from "./components/order/order";
function App() {
  return (
    <div>
      <Route path="/" component={NavBar}></Route>

      <Route path="/" exact component={Shop}></Route>
      <Route path="/cart" exact component={Cart}></Route>
      <Route path="/orders" exact component={Order}></Route>
    </div>
  );
}

export default App;
