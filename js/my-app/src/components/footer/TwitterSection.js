import React, { Component } from 'react';
import TwitterItem from './TwitterItem.js';
import TitleFooter from './TitleFooter.js';

const TwitterList = [
  {
    title: 'CMS Masters And Their Best Web Design Tools ',
    tags: '#bestwebdesigntools #webdesign',
    time: '12 min',
    id: 1,
  },

  {
    title: 'OMMERCE functionality added!!! See Industrial theme become even powerful! - ',
    tags: 'bit.ly/industrial-wp',
    time: '47 days',
    id: 2,
  },

  {
    title: 'CMS Masters And Their Best Web Design Tools ',
    tags: '#bestwebdesigntools #webdesign',
    time: '12 min',
    id: 3,
  }
]

class TwitterSection extends Component {
  render() {
    return (
      <section className="col-12 col-md-6 col-lg-3 footer-top-item border-blue">
        <TitleFooter name='Latest tweets' />
        <TwitterItem obj={TwitterList} />
      </section>
    );
  }
}

export default TwitterSection;
