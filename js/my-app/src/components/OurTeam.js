import React, { Component } from 'react';
import FirstTeam from './../styles/img/people.jpg';
import SecondTeam from './../styles/img/people1.jpg';
import ThirdTeam from './../styles/img/people2.jpg';
import FourthTeam from './../styles/img/people3.jpg';

class OurTeam extends Component {
  render() {
    return (
<section className="our-team d-flex justify-content-center align-items-center">
        <div className="container text-center">

            <h3 className="title-section">Our team</h3>

            <ul className="row">

                <li className="col-12 col-sm-6 col-lg-3 our-team-item">
                    <div className="wrapper">
                        <figure>
                            <img src={FirstTeam} alt="our-team" style={{width: 208, height: 280}} className="our-team-img" />
                            <div className="cover">
                                <figcaption className="cover-info">
                                    <h4>Manny Delgado</h4>
                                    <p>a little boy</p>
                                </figcaption>
                                <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                            </div>
                        </figure>
                        <a href="" className="btn btn-lg btn-primary">Profile</a>
                    </div>
                </li>

                <li className="col-12 col-sm-6 col-lg-3 our-team-item">
                    <div className="wrapper">
                        <figure>
                            <img src={SecondTeam} alt="our-team" style={{width: 208, height: 280}} className="our-team-img" />
                            <div className="cover">
                                <figcaption className="cover-info">
                                    <h4>Manny Delgado</h4>
                                    <p>a little boy</p>
                                </figcaption>
                                <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                            </div>
                        </figure>
                        <a href="" className="btn btn-lg btn-primary">Profile</a>
                    </div>
                </li>

                <li className="col-12 col-sm-6 col-lg-3 our-team-item">
                    <div className="wrapper">
                        <figure>
                            <img src={ThirdTeam} alt="our-team" sstyle={{width: 208, height: 280}} className="our-team-img" />
                            <div className="cover">
                                <figcaption className="cover-info">
                                    <h4>Luke Dunphy</h4>
                                    <p>NATO representative</p>
                                </figcaption>
                                <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                            </div>
                        </figure>
                        <a href="" className="btn btn-lg btn-primary">Profile</a>
                    </div>
                </li>

                <li className="col-12 col-sm-6 col-lg-3 our-team-item">
                    <div className="wrapper">
                        <figure>
                            <img src={FourthTeam} alt="our-team" style={{width: 208, height: 280}} className="our-team-img" />
                            <div className="cover">
                                <figcaption className="cover-info">
                                    <h4>Mitchell Pritchett</h4>
                                    <p>ecology lawer</p>
                                </figcaption>
                                <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                            </div>
                        </figure>
                        <a href="" className="btn btn-lg btn-primary">Profile</a>
                    </div>
                </li>

            </ul>
        </div>
    </section>
    );
  }
}

export default OurTeam;
