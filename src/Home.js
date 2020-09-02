import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import logo2 from "./matt-dizzle-dev-logo.png";
import People from "./People";
import "./App.css";

function Home() {
    
        return (
            <div className="App">
            <header className="App-header">
              <img src={logo2} className="App-logo" alt="logo" />
              <p>
                Welcome to my portfolio.
              </p>
              
              <Link  to="/people" className="App-link"  >
                Enter
              </Link>
            </header>
          </div>
        )
    }

    export default Home;
