import React, { Component } from 'react';

import Header from './Header.js';
import HeadingSection from './HeadingSection.js';
import MainSection from './portfolio-single page/MainSection.js';
import Footer from './Footer.js';

class PortfolioSinglePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeadingSection title='Project title' />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

export default PortfolioSinglePage;
