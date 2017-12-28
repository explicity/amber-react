import React, { Component } from 'react';
import TitleFooter from './TitleFooter.js';

import map from './../../styles/img/map.png';

class AddressSection extends Component {
  render() {
    return (
      <section className="col-12 col-md-6 col-lg-3 footer-top-item border-violet">
          <TitleFooter name='Get in touch' />
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
              <img src={map} alt="map" style={{width: 210, height: 150}} />
          </a>
      </section>
    );
  }
}

export default AddressSection;
