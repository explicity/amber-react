import React, { Component } from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

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