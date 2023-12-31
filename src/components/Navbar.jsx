import React from "react";
import LOGO from "../assets/logo.png";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

// Now we add Links to set routing

const Navbar = () => {
  return (
    <>
      {/* Press CTRL + D for Multiple Selection */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={LOGO} alt="Bootstrap" height="24" />
          </a>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            {/* mx-auto mean left and right origin auto and set to center */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/product"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-primary">
                  <CiSearch />
                </button>
                <button type="button" className="btn btn-primary">
                  <FiUser />
                </button>
                <button type="button" className="btn btn-primary">
                  <CiHeart />
                </button>
                <button type="button" className="btn btn-primary">
                  <CiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
