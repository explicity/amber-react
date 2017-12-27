import React, { Component } from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <FooterTop />
          <FooterBottom />
        </div>
      </footer>
    );
  }
}

export default Footer;
