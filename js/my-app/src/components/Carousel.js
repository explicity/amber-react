import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
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
    );
  }
}

export default Carousel;
