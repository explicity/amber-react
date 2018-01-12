import React, { Component } from 'react';

import LatestWork1 from './../../styles/img/latest-work.jpg';
import LatestWork2 from './../../styles/img/latest-work2.jpg';

class LatestWorks extends Component {
  render() {
    return (
      <section className="sidebar-works">
        <h3 className="single-blog-title">Latest works</h3>
        <div id="Controls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 sidebar-works-img" src={LatestWork1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 sidebar-works-img" src={LatestWork2} alt="Second slide" />
            </div>
          </div>
          <div className="text-center">
            <a className="list-control" href="#Controls" data-slide="prev">
              <span className="sr-only">Previous</span>
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <a className="list-control" href="#Controls" data-slide="next">
              <span className="sr-only">Next</span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default LatestWorks;
