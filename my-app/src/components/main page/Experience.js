import React, { Component } from 'react';
import TitleSection from './TitleSection.js';
import ExperienceItem from './experience-section/ExperienceItem.js';

import FirstExp from './../../styles/img/mechanic.png';
import SecondExp from './../../styles/img/tel.png';
import ThirdExp from './../../styles/img/rocket.png';

class Experience extends Component {
  render() {
    const ExpList = [
        {
            url: FirstExp,
            num: '500',
            text: 'years of web development',
            cls: 'progress-80',
            col: 'col-lg-3',
        },

        {
            url: SecondExp,
            num: '25 000',
            text: 'results of the last winter year',
            cls : 'progress-60 icon-dots',
            col: 'col-lg-6',
        },

        {
            url: ThirdExp,
            num: '100 000', 
            text: 'euros of the military budget',
            cls: 'progress-90',
            col: 'col-lg-3', 
        }
    ];

    return (
          <section className="experience d-flex justify-content-center align-items-center">
        <div className="container text-center">

            <TitleSection name='Company experience' />
            <ExperienceItem obj={ExpList} />

        </div>
    </section>
    );
  }
}

export default Experience;
