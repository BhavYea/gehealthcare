import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { ButtonToolbar, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Form from "./Form";
import StandardA from "./StandardA";
import StandardB from "./StandardB";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Form} />
          {/* <Form /> */}
          <Route path="/standarda" exact component={StandardA} />
          <Route path="/standardb" exact component={StandardB} />
          <StandardB />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
