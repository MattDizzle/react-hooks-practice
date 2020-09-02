import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logo2 from "./matt-dizzle-dev-logo.png";
import People from "./People";
import Home from "./Home";
import "./App.css";

function App() {

 

  return (
    <div>
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
          Welcome to my portfolio.
        </p>
        
        <Link  to="/" className="App-link" target="_blank" >
          Enter
        </Link>
      </header>
    </div>


<Switch>
<Route path="/people" component={People}>
  <People />
</Route>
<Route path="/users">
  <People />
</Route>
<Route path="/">
  <Home />
</Route>
</Switch>

</div>
    )
}

export default App;
