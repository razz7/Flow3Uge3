import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./header";
import Home from "./home";
import Product from "./product";
import Company from "./company";
import Nomatch from "./nomatch";

function App(props) {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/products"
            render={() => <Product bookstore={props.bookstore} />}
          />
          <Route path="/company" render={() => <Company />} />
          <Route component={Nomatch} />
        </div>
      </Router>
    </div>
  );
}

export default App;
