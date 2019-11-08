/* Import statements */
import React, { useState } from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Products from "./Products";
import Data from "./data/data.json";

/* App component */
export default function App() {
  const [person, setPerson] = useState();
  const [persons, Setpersons] = useState(Data);
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            /* Link components are used for linking to other views */
            <li>
              <Link to="/">Homes</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        /* Route components are rendered if the path prop matches the current
        URL */
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
