import React, { Component } from 'react';

import FirstSlide from './../../styles/img/portfolio.jpg';
import SecondSlide from './../../styles/img/portfolio2.jpg';

class PortfolioCarousel extends Component {
  render() {
    return (
      <div className="col-12 col-md-9">

          <div id="carouselExampleControls" className="carousel slide buttons" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={FirstSlide} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={SecondSlide} alt="Second slide" />
              </div>
            </div>

            <a className="btn controls controls-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="btn controls controls-next" href="#carouselExampleControls" role="button" data-slide="next">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
      </div>
    );
  }
}

export default PortfolioCarousel;
