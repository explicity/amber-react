import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../../styles/img/logo.png';
import NavigationMenu from './NavigationMenu.js';

const NavigationList = [
  {
    cls: 'border-yellow',
    text: 'Home',
    link: '/',
  },

  {
    cls: 'border-orange',
    text: 'Typography',
    link: '/',
  },

  {
    cls: 'border-pink',
    text: 'Blog',
    link: '/blogs',
  },

  {
    cls: 'border-purple',
    text: 'Pages',
    link: '/',
  },

  {
    cls: 'border-violet',
    text: 'Elements',
    link: '/',
  },

  {
    cls: 'border-blue',
    text: 'Ecommerse',
    link: '/',
  },

  {
    cls: 'border-aqua',
    text: 'Mega Menu',
    link: '/',
  }
]

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

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <NavigationMenu obj={NavigationList} />
        </div>
      </div>
    );
  }
}

export default HeaderBottom;