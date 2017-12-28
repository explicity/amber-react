import React, { Component } from 'react';
import BlockquoteTitle from './blockquote/BlockquoteTitle.js';

import FirstImg from './../styles/img/space1.jpg';
import SecondImg from './../styles/img/space2.jpg';
import ThirdImg from './../styles/img/space3.jpg';
import FourthImg from './../styles/img/space4.jpg';
import FifthImg from './../styles/img/space5.jpg';

class Blockquote extends Component {
  render() {
    return (
        <section className="blockquote">
        <BlockquoteTitle />

        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators2" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators2" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 blockquote-img" src={FirstImg} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 blockquote-img" src={SecondImg} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 blockquote-img" src={ThirdImg} alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 blockquote-img" src={FourthImg} alt="Forth slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 blockquote-img" src={FifthImg} alt="Fifth slide" />
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Blockquote;
