import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import AllFriends from "./AllFriends";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>WELCOME TO DATA SHOP</h1>
        <Link to="/all">All you friends</Link>

        <Switch>
          <Route path="/all" component={AllFriends} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
