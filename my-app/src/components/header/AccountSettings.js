import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountSettings extends Component {
  render() {
    return (
      <div>
        <ul className="navbar-nav">
          <li>
            <Link to='' className="header-top-link icon-login">Login</Link>
          </li>
          <li>
            <Link to='' className="header-top-link icon-register">Register</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default AccountSettings;