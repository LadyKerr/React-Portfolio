import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wraper brown darken-3">
          <Link to="/" className="brand-logo">
            Lady Kerr
          </Link>
          <ul className="right">
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
