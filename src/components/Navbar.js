import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <>
      <header>
        <div className="container-fluid header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-3 logo-dv">
                <img src="assets/images/logo.jpg" alt="Logo" />
                <span><h1>SHRI GOKULDAS S SHIRODKER CHARITY</h1></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/programs">Programs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
