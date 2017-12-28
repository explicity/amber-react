import React, { Component } from 'react';
import SocialItem from './SocialItem.js';
import TitleFooter from './TitleFooter.js';

class SocialSection extends Component {
  render() {
    return (
      <section className="col-12 col-md-6 col-lg-3 footer-top-item border-pink ">
          <TitleFooter name='Follow us' />
          <ul>
              <li className="icon-facebook">
                  <SocialItem name='Like us on Facebook' />
              </li>
              <li className="icon-twitter">
                  <SocialItem name='Follow us on Twitter' />
              </li>
              <li className="icon-youtube">
                  <SocialItem name='Watch videos on YouTube' />
              </li>
              <li className="icon-instagram">
                  <SocialItem name='Friend us on Instagram' />
              </li>
              <li className="icon-pinterest">
                <SocialItem name='Repin on Pinterest' />
              </li>
          </ul>
      </section>
    );
  }
}

export default SocialSection;
