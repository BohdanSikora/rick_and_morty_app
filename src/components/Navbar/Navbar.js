import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.scss";
import logo from "../../Image/logo.png";
const Navbar = () => {
  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          <img className="logo" src={logo} alt="Rick and Morty logo" /> 
          
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigat  "
        >
          <span class="fas fa-bars open text-info  "></span>
          <span class="fas fa-times close text-light"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className={`${styles.link} navbar-nav fs-5`} >
            <NavLink to="/" className="nav-link text-info">
              Characters
            </NavLink>
            <NavLink  to="/watchlist" className="nav-link text-info">
              My watch list
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;