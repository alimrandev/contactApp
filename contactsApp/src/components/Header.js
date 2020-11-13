import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
              <NavLink to ='/' exact activeClassName="selected">
                Home
              </NavLink>
              </li>
              <li>
              <NavLink to ='/add' activeClassName="selected">
                Add Contact
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default Header;