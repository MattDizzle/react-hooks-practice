import React from "react";
import { Route, Switch } from "react-router-dom";
import People from "./People";
import Home from "./Home"
import "./App.css";

function App() {

 

  return (
    <div>

<Switch>

<Route path="/">
  <Home />
</Route>

<Route exact path="/people" component={People} />


</Switch>


</div>
    )
}

export default App;
