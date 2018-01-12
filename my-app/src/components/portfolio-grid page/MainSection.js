import React, { Component } from 'react';

import WorkItem from './../main page/works-section/WorkItem.js';

import FirstWork from './../../styles/img/nature1.jpg';
import SecondWork from './../../styles/img/nature2.jpg';
import ThirdWork from './../../styles/img/nature3.jpg';

class MainSection extends Component {
  render() {
    const GridPortfolio = [
      {
          url: FirstWork,
          title: 'Lindemans Wine',
          text:  'Art Direction, Web Design',
          id: 1,
      },

      {
          url: SecondWork,
          title: 'Lindemans Wine',
          text:  'Art Direction, Web Design', 
          id: 2,
      },

      {
          url: ThirdWork,
          title: 'Marketing materials and branding',
          text:  'Photography, Web Design',
          id: 3,
      },

      {
          url: FirstWork,
          title: 'Lindemans Wine',
          text:  'Art Direction, Web Design',
          id: 4,
      },

      {
          url: SecondWork,
          title: 'Lindemans Wine',
          text:  'Art Direction, Web Design', 
          id: 5,
      },

      {
          url: ThirdWork,
          title: 'Marketing materials and branding',
          text:  'Photography, Web Design',
          id: 6,
      },

      {
          url: FirstWork,
          title: 'Lindemans Wine',
          text:  'Art Direction, Web Design',
          id: 7,
      },

      {
          url: SecondWork,
          title: 'Lindemans Wine',
          text:  'Art Direction, Web Design', 
          id: 8,
      },

      {
          url: ThirdWork,
          title: 'Marketing materials and branding',
          text:  'Photography, Web Design',
          id: 9,
      }
    ];

    return (
      <section className="gallery-section">
        <div className="container">

        <p className="gallery-section-info">Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com brownie lollipop sesame snaps bear claw sweet roll sweet I love soufflé. Caramels powder gummies pudding danish sesame snaps. Sweet roll caramels fruitcake bonbon unerdwear.com brownie ice cream carrot cake. Carrot cake apple pie gummies I love applicake I love I love chocolate bar pudding.</p>

        <ul className="gallery-section-list mb-3">
          <li className="active"><a href="" className="gallery-section-link">View all</a></li>
          <li><a href="" className="gallery-section-link">Videos</a></li>
          <li><a href="" className="gallery-section-link">Photos</a></li>
          <li><a href="" className="gallery-section-link">Games</a></li>
          <li><a href="" className="gallery-section-link">Apps</a></li>
          <li><a href="" className="gallery-section-link">Poisons</a></li>
        </ul>

        <WorkItem obj={GridPortfolio} />

        <div className="text-center">
          <button type="button" className="gallery-section-btn hvr-icon-hang">Show more images</button>
        </div>

        </div>
      </section>
      );
  }
}

export default MainSection;
