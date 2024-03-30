import React, { useEffect, useState } from 'react';
import { ReactDOM } from "react";
import "../styles/navbar.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.png"



// <Link to={"/men"}></Link>
// <Link to={"/women"}><a class="dropdown-item" href="#">Women</a></Link>

export default function Navbar(){
    return(
      <div>
              <div className="row head">
      <h2>John</h2>
      <img src={logo} />
      <h2>Consult</h2>
  </div>
  <hr/>

      <nav class="navbar navbar-expand-lg navbar-light mb-3 mt-3 sticky-top">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link to={"/"}class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></Link>
      <Link class="nav-item nav-link" to={"/joblist"}>JobList</Link>
      <Link class="nav-item nav-link" to={"/application"} >Application</Link>
      <Link to={"/contact"} class="nav-item nav-link" tabindex="-1" aria-disabled="true">Contact</Link>
    </div>
  </div>
</nav>
      </div>
    )
} 