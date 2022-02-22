import React from "react"
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home.jsx"
import Login from "./components/login.jsx"

function App() {
  return (
    <BrowserRouter>
 
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
 
    <div></div> 
    <Switch>
      <Route exact path="/" component ={Home} />
      <Route exact path="/login" component ={Login} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
