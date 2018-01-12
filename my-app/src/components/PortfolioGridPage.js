import React, { Component } from 'react';

import Header from './Header.js';
import PortfolioHeading from './portfolio-grid page/PortfolioHeading.js';
import MainSection from './portfolio-grid page/MainSection.js';
import Footer from './Footer.js';

class PortfoilioGridPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <PortfolioHeading />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

export default PortfoilioGridPage;
