import React, { Component } from 'react';

import PortfolioCarousel from './PortfolioCarousel.js';
import PortfolioInfo from './PortfolioInfo.js';

class MainSection extends Component {
  render() {
    return (
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <PortfolioCarousel />
            <PortfolioInfo />
          </div>
        </div>
      </section>
    );
  }
}

export default MainSection;
