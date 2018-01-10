import React, { Component } from 'react';

import PortfolioDescription from './PortfolioDescription.js';
import Btn from './../Btn.js';

class PortfolioInfo extends Component {
  render() {
    const DescriptionList = [
      'Brownie ice cream carrot',
      'Carrot cake apple pie',
      'Love applicake I love',
      'Chocolate bar pudding',
    ];

    return (
      <div className="col-12 col-md-3">
        <div className="d-flex mb-5 buttons">
          <button type="button" className="btn btn-gallery">
            <span className="sr-only">Previous</span>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button type="button" className="btn btn-gallery">
            <span className="sr-only">Next</span>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
        <p className="mb-4">
            <i className="fa fa-heart" aria-hidden="true"></i>
            257
        </p>
        <article className="portfolio-article">
          <h3 className="portfolio-article-title">Art Direction, Web Design</h3>
          <p>Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com brownie lollipop sesame snaps bear claw sweet roll sweet I love soufflé.</p>
          <p>Caramels powder gummies pudding danish sesame snaps. Sweet roll caramels fruitcake bonbon unerdwear.</p>
        </article>
        <PortfolioDescription obj={DescriptionList} />
        <Btn name='Buy now' />
      </div>
    );
  }
}

export default PortfolioInfo;
