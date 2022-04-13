import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import Header from "../components/Header";
import Cart from "../components/Cart";
function Routes(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
