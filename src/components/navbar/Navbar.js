import React from 'react';
import "./navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from "react-toastify"

export const Navbar = () => {

  let cu = useSelector(store => store.userSection.cu)
  let dispatch = useDispatch()
  let move = useNavigate()

  function Logout() {
    dispatch({
      type: 'LOGOUT_USER'
    });
    toast.success("Logout");
    move('/login');
  }
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className='logo1'>Buy</span><span className='logo2'><FaCheck /></span>
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
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                  Prducts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">
                  Contact
                </a>
              </li>
              {cu.email === "asd@gmail.com" &&
                <>
                  <li className="nav-item" onClick={() => {
                    move('/dashboard')
                  }}>
                    <a className="nav-link">
                      Profile
                    </a>
                  </li>

                </>
              }
              {cu._id === undefined &&
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="login">
                      Login
                    </a>
                  </li>
                </>

              }
              {cu._id != undefined && cu.email != "asd@gmail.com" &&
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="cart">
                      <span>
                        <FiShoppingCart />
                      </span>
                      {/* <span className="cart-item-count">0</span> */}
                    </a>
                  </li>

                </>
              }
              {cu._id != undefined &&
                <>
                  <li className="nav-item">
                    <a className="nav-link" onClick={Logout}>
                      Logout
                    </a>
                  </li>
                </>
              }

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
