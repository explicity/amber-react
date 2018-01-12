import React, { Component } from 'react';

import FooterTop from './footer/FooterTop';
import FooterBottom from './footer/FooterBottom';

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
