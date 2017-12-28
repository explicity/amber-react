import React, { Component } from 'react';
import TitleSection from './TitleSection.js';
import ExperienceItem from './experience-section/ExperienceItem.js';

import FirstExp from './../styles/img/mechanic.png';
import SecondExp from './../styles/img/tel.png';
import ThirdExp from './../styles/img/rocket.png';

const ExpList1 = {
    url: FirstExp,
    num: '500',
    text: 'years of web development',
    cls: 'progress-80',
}

const ExpList2 = {
    url: SecondExp,
    num: '25 000',
    text: 'results of the last winter year',
    cls : 'progress-60 icon-dots',
}

const ExpList3 = {
    url: ThirdExp,
    num: '100 000', 
    text: 'euros of the military budget',
    cls: 'progress-90',
}


class Experience extends Component {
  render() {
    return (
          <section className="experience d-flex justify-content-center align-items-center">
        <div className="container text-center">

            <TitleSection name='Company experience' />
            
            <ul className="row">
                <li className="col-12 col-lg-3 experience-list-item">
                    <ExperienceItem 
                        url={ExpList1.url}
                        num={ExpList1.num}
                        text={ExpList1.text}
                        cls={ExpList1.cls}
                    />
                </li>
                <li className="col-12 col-lg-6 experience-list-item">
                    <ExperienceItem 
                        url={ExpList2.url}
                        num={ExpList2.num}
                        text={ExpList2.text}
                        cls={ExpList2.cls}
                    />
                </li>
                <li className="col-12 col-lg-3 experience-list-item">
                    <ExperienceItem 
                        url={ExpList3.url}
                        num={ExpList3.num}
                        text={ExpList3.text}
                        cls={ExpList3.cls}
                    />
                </li>
            </ul>
        </div>
    </section>
    );
  }
}

export default Experience;
