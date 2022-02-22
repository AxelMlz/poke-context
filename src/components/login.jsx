import React, { Component } from 'react'
import {useState, useEffect} from "react";
import { useForm } from "react-hook-form"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./home" 
import { useHistory } from "react-router-dom";

  function login()  {
    const history = useHistory();
    const { Register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>{ history.push("/")};

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label for="First Name"></label>
          <input {...Register("Username",{required: true, maxLenght :{value : 15, message : "error"}})}type="text" placeholder="Username"  />
          {errors.username && <span>Please enter a username</span>}
        
          <input type={"password", "required"} placeholder="Password" {...Register("Password",{required: true, minLenght :{value : 6,errors ,message : "error"}})}/>
          {errors.username && <span>Please enter a username</span>}
          <input type="submit"/>
        </form>
        <Link to="/">Home</Link>
        <Route exact path="/" component ={Home} />
      </div>
    )
  }

export default login