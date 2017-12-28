import React, { Component } from 'react';
import logo from './../../styles/img/logo.png';
import NavigationMenu from './NavigationMenu.js';

class HeaderBottom extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      	<div className="container">
            <h1>
                <a href="">
                    <img src={logo} alt="logo" style={{width: 130, height: 48}} />
                </a>
            </h1>
            <NavigationMenu />
        </div>
      </div>
    );
  }
}

export default HeaderBottom;