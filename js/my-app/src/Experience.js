import React, { Component } from 'react';
import FirstExp from './styles/img/mechanic.png';
import SecondExp from './styles/img/tel.png';
import ThirdExp from './styles/img/rocket.png';

class Experience extends Component {
  render() {
    return (
          <section className="experience d-flex justify-content-center align-items-center">
        <div className="container text-center">

            <h3 className="title-section">Company experience</h3>

            <ul className="row">
                <li className="col-12 col-lg-3 experience-list-item">
                    <div className="pie-wrapper progress-80">
                        <img src={FirstExp} alt="mechanic" className="experience-img" />
                        <div className="pie">
                            <div className="left-side half-circle"></div>
                            <div className="right-side half-circle"></div>
                        </div>
                    </div>
                    <p className="label">500</p>
                    <p>years of web development</p>
                </li>
                <li className="col-12 col-lg-6 experience-list-item">
                    <div className="pie-wrapper progress-60 icon-dots">
                        <img src={SecondExp} alt="telephone" className="experience-img" />
                        <div className="pie">
                            <div className="left-side half-circle"></div>
                            <div className="right-side half-circle"></div>
                        </div>
                    </div>
                    <p className="label">25 000</p>
                    <p>results of the last winter year</p>
                </li>
                <li className="col-12 col-lg-3 experience-list-item">
                    <div className="pie-wrapper progress-90">
                        <img src={ThirdExp} alt="rocket" className="experience-img" />
                        <div className="pie">
                            <div className="left-side half-circle"></div>
                            <div className="right-side half-circle"></div>
                        </div>
                    </div>
                    <p className="label">100 000</p>
                    <p>euros of the military budget</p>
                </li>
            </ul>
        </div>
    </section>
    );
  }
}

export default Experience;
