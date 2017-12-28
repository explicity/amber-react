import React, { Component } from 'react';
import HeaderTop from './header/HeaderTop';
import HeaderBottom from './header/HeaderBottom';

class Header extends Component {
  render() {
    return (
      <div className="header fixed-top">
        <HeaderTop />
        <HeaderBottom />
      </div>
    );
  }
}

export default Header;