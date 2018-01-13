import React, { Component } from 'react';


class PortfolioHeading extends Component {
  render() {
    return (
      <section className="title-blog">
        <div className="title-blog-main">
          <div className="container">

            <div className="title-blog-secondary d-flex justify-content-between align-items-center">
              <h2>Portfolio grid gallery</h2>
              
              <div aria-label="breadcrumb" role="navigation" className="d-flex align-items-center">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="">Home</a></li>
                  <li className="breadcrumb-item"><a href="">Shortcodes</a></li>
                  <li className="breadcrumb-item"><a href="">Typography</a></li>                
                  <li className="breadcrumb-item"><a href="">Blog</a></li>
                </ol>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioHeading;