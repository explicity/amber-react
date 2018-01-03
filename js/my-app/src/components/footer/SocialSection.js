import React, { Component } from 'react';
import SocialItem from './SocialItem.js';
import TitleFooter from './TitleFooter.js';

const SocialList = [
  {
    icon: 'icon-facebook',
    name: 'Like us on Facebook',
  },

  {
    icon: 'icon-twitter',
    name: 'Like us on Twitter',
  },

  {
    icon: 'icon-youtube',
    name: 'Watch videos on YouTube',
  },

  {
    icon: 'icon-instagram',
    name: 'Friend us on Instagram',
  },

  {
    icon: 'icon-pinterest',
    name: 'Repin on Pinterest',
  }
]

class SocialSection extends Component {
  render() {
    return (
      <section className="col-12 col-md-6 col-lg-3 footer-top-item border-pink ">
          <TitleFooter name='Follow us' />
          <SocialItem obj={SocialList} />
      </section>
    );
  }
}

export default SocialSection;
