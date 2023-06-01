import React from 'react';
import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";

export const Navbar = () => {
  

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            BUyRight
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Prducts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>
                    <FiShoppingCart />
                  </span>
                  <span className="cart-item-count">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
