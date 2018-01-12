import React, { Component } from 'react';
import Btn from './../Btn.js';

import FirstSlide from './../../styles/img/firstslide.jpg';
import SecondSlide from './../../styles/img/secondslide.jpg';
import ThirdSlide from './../../styles/img/thirdslide.jpg';
import FourthSlide from './../../styles/img/fourthslide.jpg';
import FifthSlide from './../../styles/img/fifthslide.jpg';

class WelcomeSection extends Component {
  render() {
    return (
      <section className="welcome-section">

          <div className="main">
              <div className="container text-center">
                  <header className="main-header">
                      <h2>Creating a unique look.</h2>
                      <h2>Never been easier.</h2>
                  </header>
                  <Btn name='See features' />
                  <Btn name='Purchase now' />
              </div>
          </div>

          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
              </ol>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img className="d-block w-100 welcome-section-img" src={FirstSlide} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                      <img className="d-block w-100 welcome-section-img" src={SecondSlide} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                      <img className="d-block w-100 welcome-section-img" src={ThirdSlide} alt="Third slide" />
                  </div>
                  <div className="carousel-item">
                      <img className="d-block w-100 welcome-section-img" src={FourthSlide} alt="Fourth slide" />
                  </div>
                  <div className="carousel-item">
                      <img className="d-block w-100 welcome-section-img" src={FifthSlide} alt="Fifth slide" />
                  </div>
              </div>
          </div>
          
      </section>
    );
  }
}

export default WelcomeSection;