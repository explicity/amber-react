import React, { Component } from 'react';

import TitleSection from './TitleSection.js';
import WorkItem from './works-section/WorkItem.js';

import FirstWork from './../styles/img/nature1.jpg';
import SecondWork from './../styles/img/nature2.jpg';
import ThirdWork from './../styles/img/nature3.jpg';


const WorkList = [
    {
        url: FirstWork,
        title: 'Lindemans Wine',
        text:  'Art Direction, Web Design',
    },

    {
        url: SecondWork,
        title: 'Lindemans Wine',
        text:  'Art Direction, Web Design', 
    },

    {
        url: ThirdWork,
        title: 'Marketing materials and branding',
        text:  'Photography, Web Design',
    }
]

class LastWorks extends Component {
  render() {
    return (
        <section className="last-works d-flex justify-content-center align-items-center">
            <div className="container">
                <header className="text-center">
                        <TitleSection name='Latest works' />
                    <p className="title-content">That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our
                    trials and triumphs became at once unique and universal.</p>
                </header>

                <WorkItem obj={WorkList} />

                <div className="text-center">
                    <button className="list-control" href="controls">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                    <button className="list-control" href="controls">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </button>
                </div>

            </div>

        </section>
    );
  }
}

export default LastWorks;
