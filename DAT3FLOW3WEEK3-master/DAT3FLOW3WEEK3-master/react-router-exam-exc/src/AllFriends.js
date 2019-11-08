import Data from "./data/data.json";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

export default function AllFriends({ match }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {Data.users.map((person, index) => 
            <tr key={Data.users.index}>
              <td>
                <img src={person.picture.large} alt="person" />
              </td>
              <td>
                {person.first} {person.last}
              </td>
              <td>
                <Link to={`${match.url}/${person.first}`}> Details </Link>
              </td>
            </tr>
          )}
          
        </tbody>
      </table>
    </div>
  );
}
