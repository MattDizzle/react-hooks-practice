import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo2 from "./matt-dizzle-dev-logo.png";
import "./App.css";

function App() {

  const people = [
    {
      name: 'matthew',
     dog: 'noopy'
    }, 
    {name: 'muhajir'}, 
    {name: 'miki'}, 
    {name: 'chris'}, 
    {name: 'wesley'}
  ];
  
  const List = people.map((person)=>
  <div>
<h2>{person.name}</h2>
</div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
          Welcome to my portfolio.
        </p>
        {/* <>{List}</> */}
        <Link
          className="App-link"
          to="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
        </Link>
      </header>
    </div>
    )
}

export default App;
