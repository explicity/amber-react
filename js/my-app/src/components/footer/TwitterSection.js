import React, { Component } from 'react';
import TwitterItem from './TwitterItem.js';
import TitleFooter from './TitleFooter.js';

const TwitterList1 = {
    title: 'CMS Masters And Their Best Web Design Tools ',
    tags: '#bestwebdesigntools #webdesign',
    time: '12 min',
}

const TwitterList2 = {
    title: 'OMMERCE functionality added!!! See Industrial theme become even powerful! - ',
    tags: 'bit.ly/industrial-wp',
    time: '47 days',
}

const TwitterList3 = {
    title: 'CMS Masters And Their Best Web Design Tools ',
    tags: '#bestwebdesigntools #webdesign',
    time: '12 min',
}

class TwitterSection extends Component {
  render() {
    return (
      <section className="col-12 col-md-6 col-lg-3 footer-top-item border-blue">
        <TitleFooter name='Latest tweets' />
        <ul>
            <li className="list-item icon-tweet">
              <TwitterItem
                title={TwitterList1.title}
                tags={TwitterList1.tags}
                time={TwitterList1.time}
              />
            </li>
            <li className="list-item icon-tweet">
              <TwitterItem
                title={TwitterList2.title}
                tags={TwitterList2.tags}
                time={TwitterList2.time}
              />
            </li>
            <li className="list-item icon-tweet">
              <TwitterItem
                title={TwitterList3.title}
                tags={TwitterList3.tags}
                time={TwitterList3.time}
              />
            </li>
        </ul>
      </section>
    );
  }
}

export default TwitterSection;
