import React, { Component } from 'react';


class PortfolioHeading extends Component {
  render() {
    return (
      <section class="title-blog">
        <div class="title-blog-main">
          <div class="container">

            <div class="title-blog-secondary d-flex justify-content-between align-items-center">
              <h2>Portfolio grid gallery</h2>
              
              <div aria-label="breadcrumb" role="navigation" class="d-flex align-items-center">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="">Home</a></li>
                  <li class="breadcrumb-item"><a href="">Shortcodes</a></li>
                  <li class="breadcrumb-item"><a href="">Typography</a></li>                
                  <li class="breadcrumb-item"><a href="">Blog</a></li>
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