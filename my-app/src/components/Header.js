import React, { Component } from 'react';
import HeaderTop from './header/HeaderTop';
import HeaderBottom from './header/HeaderBottom';

class Header extends Component {
  render() {
    return (
      <header className="header fixed-top" name="top">
        <HeaderTop />
        <HeaderBottom />
      </header>
    );
  }
}

export default Header;