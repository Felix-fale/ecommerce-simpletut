import React from "react";
import "./header.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to='/'>
            <img src={Logo} alt="SimpleTut LOGO" />
          </Link>
        </div>

        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
