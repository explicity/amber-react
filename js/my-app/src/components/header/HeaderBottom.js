import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../../styles/img/logo.png';
import NavigationMenu from './NavigationMenu.js';

class HeaderBottom extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      	<div className="container">
            <h1>
                <Link to='/'>
                    <img src={logo} alt="logo" style={{width: 130, height: 48}} />
                </Link>
            </h1>
            <NavigationMenu />
        </div>
      </div>
    );
  }
}

export default HeaderBottom;