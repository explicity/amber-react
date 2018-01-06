import React, { Component } from 'react';

import Header from './Header.js';
import HeadingSection from './HeadingSection.js';
import Footer from './Footer.js';

class PortfolioSinglePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeadingSection title='Project title' />
        <Footer />
      </div>
    );
  }
}

export default PortfolioSinglePage;
