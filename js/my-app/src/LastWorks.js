import React, { Component } from 'react';
import FirstWork from './styles/img/nature1.jpg';
import SecondWork from './styles/img/nature2.jpg';
import ThirdWork from './styles/img/nature3.jpg';


class LastWorks extends Component {
  render() {
    return (
<section className="last-works d-flex justify-content-center align-items-center">
    <div className="container">
        <header className="text-center">
            <h3 className="title-section">Latest work</h3>
            <p className="title-content">That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our
            trials and triumphs became at once unique and universal.</p>
        </header>

        <ul className="row works-list" id="controls">


            <li className="col-12 col-lg-4 works-list-item">
                <figure>
                    <img src={FirstWork} alt="latest-work" style={{width: 290, height: 290}} className="works-list-img" />
                    <figcaption className="figcaption d-flex justify-content-between">
                        <div className="figcaption-info">
                            <h4>Lindemans Wine</h4>
                            <p>Art Direction, Web Design</p>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            <p>257</p>
                        </div>
                    </figcaption>
                    <div className="links">
                        <ul>
                            <li className="links-item">
                                <a href="" className="links-main">
                                    <i className="fa fa-heart links-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="links-item">
                                <a href="pages/portfolio-grid.html" className="links-main">
                                    <i className="fa fa-search-plus links-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="links-item">
                                <a href="" className="links-main">
                                    <i className="fa fa-link links-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </figure>
            </li>

            <li className="col-12 col-lg-4 works-list-item">
                <figure>
                    <img src={SecondWork} alt="latest-work" style={{width: 290, height: 290}} className="works-list-img" />
                    <figcaption className="figcaption d-flex justify-content-between">
                        <div className="figcaption-info">
                            <h4>Lindemans Wine</h4>
                            <p>Art Direction, Web Design</p>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            <p>257</p>
                        </div>
                    </figcaption>
                    <div className="links">
                        <ul>
                            <li className="links-item">
                                <a href="" className="links-main">
                                    <i className="fa fa-heart links-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="links-item">
                                <a href="pages/portfolio-grid.html" className="links-main">
                                    <i className="fa fa-search-plus links-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="links-item">
                                <a href="" className="links-main">
                                    <i className="fa fa-link links-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </figure>
            </li>

            <li className="col-12 col-lg-4 works-list-item">
                <figure>
                    <img src={ThirdWork} alt="latest-work" style={{width: 290, height: 290}} className="works-list-img" />
                    <figcaption className="figcaption d-flex justify-content-between">
                        <div className="figcaption-info">
                            <h4>Marketing materials and branding</h4>
                            <p>Photography, Web Design</p>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            <p>257</p>
                        </div>
                    </figcaption>
                    <div className="links">
                        <ul>
                            <li className="links-item">
                                <a href="" className="links-main">
                                    <i className="fa fa-heart links-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="links-item">
                                <a href="pages/portfolio-grid.html" className="links-main">
                                    <i className="fa fa-search-plus links-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="links-item">
                                <a href="" className="links-main">
                                    <i className="fa fa-link links-icon" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                        </div>

                    </figure>
                </li>

            </ul>

            <div className="text-center">
                <a className="list-control" href="controls">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </a>
                <a className="list-control" href="controls">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
            </div>

        </div>

    </section>
    );
  }
}

export default LastWorks;
