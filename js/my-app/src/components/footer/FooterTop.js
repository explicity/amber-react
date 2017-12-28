import React, { Component } from 'react';
import Map from './../../styles/img/map.png';

class FooterTop extends Component {
  render() {
    return (
      <div className="footer-top">
                <div className="row">
                    <section className="col-12 col-md-6 col-lg-3 footer-top-item border-violet">
                        <h4 className="footer-top-heading">Get in touch</h4>
                        <address>
                            <ul>
                                <li className="list-item icon-address">
                                    <span>Address: </span>
                                    <span className="color-grey">321 Street Name, United Kingdom, London
                                    </span>
                                </li>
                                <li className="list-item icon-phone">
                                    <span>Phone: </span>
                                    <span className="color-grey">+7 998 71 150 30 20</span>
                                </li>
                                <li className="list-item icon-email">
                                    <span>Email: </span>
                                    <span className="color-grey">info@ambertheme.com</span>
                                </li>
                            </ul>
                        </address>
                        <a href="">
                            <img src={Map} alt="map" style={{width: 210, height: 150}} />
                        </a>
                    </section>
                    <section className="col-12 col-md-6 col-lg-3 footer-top-item border-blue">
                        <h4 className="footer-top-heading">Latest tweets</h4>
                        <ul>
                            <li className="list-item icon-tweet">
                                <a href="" className="footer-link">
                                    <span>CMS Masters And Their Best Web Design Tools </span>
                                    <span className="color-secondary">#bestwebdesigntools #webdesign </span>
                                </a>
                                <p className="color-grey">— about 12 min ago</p>
                            </li>
                            <li className="list-item icon-tweet">
                                <a href="" className="footer-link">
                                    <span>WOOCOMMERCE functionality added!!! See Industrial theme become even powerful! - </span>
                                    <span className="color-secondary">bit.ly/industrial-wp</span>
                                </a>
                                <p className="color-grey">— about 47 days ago</p>
                            </li>
                            <li className="list-item icon-tweet">
                                <a href="" className="footer-link">
                                    <span>CMS Masters And Their Best Web Design Tools </span>
                                    <span className="color-secondary">#bestwebdesigntools #webdesign </span>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="col-12 col-md-6 col-lg-3 footer-top-item border-pink ">
                        <h4 className="footer-top-heading">Follow us</h4>
                        <ul>
                            <li className="icon-facebook">
                                <a href="" className="list-item-social">Like us on Facebook</a>
                            </li>
                            <li className="icon-twitter">
                                <a href="" className="list-item-social">Follow us on Twitter</a>
                            </li>
                            <li className="icon-youtube">
                                <a href="" className="list-item-social">Watch videos on YouTube</a>
                            </li>
                            <li className="icon-instagram">
                                <a href="" className="list-item-social">Friend us on Instagram</a>
                            </li>
                            <li className="icon-pinterest">
                                <a href="" className="list-item-social">Repin on Pinterest</a>
                            </li>
                        </ul>
                    </section>
                    <section className="col-12 col-md-6 col-lg-3 footer-top-item border-orange">
                        <h4 className="footer-top-heading">Popular posts</h4>
                        <ul>
                            <li>
                                <p>September, 30</p>
                                <a href="" className="color-secondary">Candy canes dragée pudding. Donut cheesecake I love chocolate icing </a>
                            </li>
                            <li>
                                <p>April, 22</p>
                                <a href="" className="color-secondary">Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread</a>
                            </li>
                            <li>
                                <p>May, 12</p>
                                <a href="" className="color-secondary">Cotton candy muffin tart gummies candy danish liquorice chupa chups tootsie roll</a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
    );
  }
}

export default FooterTop;
