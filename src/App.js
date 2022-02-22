import React from "react"
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home.jsx"
import Login from "./components/login.jsx"
import {useState, useEffect} from "react";

let isLogged = false
const  userContext = React.createContext(isLogged)

function App() {
  const {isLogged, setLogged} = useState()
  return (
    <BrowserRouter>
      <nav> 
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    <Switch>
      <Route exact path="/" component ={Home} />
      <Route exact path="/login" component ={Login} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
