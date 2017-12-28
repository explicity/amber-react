import React, { Component } from 'react';
import TitleSection from './TitleSection.js';
import WorkItem from './info-section/WorkItem.js';

import FirstWork from './../styles/img/nature1.jpg';
import SecondWork from './../styles/img/nature2.jpg';
import ThirdWork from './../styles/img/nature3.jpg';


const WorkList1 = {
    url: FirstWork,
    title: 'Lindemans Wine',
    text:  'Art Direction, Web Design',
};

const WorkList2 = {
    url: SecondWork,
    title: 'Lindemans Wine',
    text:  'Art Direction, Web Design',
};

const WorkList3 = {
    url: ThirdWork,
    title: 'Marketing materials and branding',
    text:  'Photography, Web Design',
};

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

                <ul className="row works-list" id="controls">

                    <li className="col-12 col-lg-4 works-list-item">
                        <WorkItem 
                            url={WorkList1.url}
                            title={WorkList1.title}
                            text={WorkList1.text}
                        />
                    </li>

                    <li className="col-12 col-lg-4 works-list-item">
                        <WorkItem 
                            url={WorkList2.url}
                            title={WorkList2.title}
                            text={WorkList2.text}
                        />
                    </li>

                    <li className="col-12 col-lg-4 works-list-item">
                        <WorkItem 
                            url={WorkList3.url}
                            title={WorkList3.title}
                            text={WorkList3.text}
                        />
                    </li>

                </ul>

                <div className="text-center">
                    <a className="list-control" href="controls">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                    <a className="list-control" href="controls">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                </div>

            </div>

        </section>
    );
  }
}

export default LastWorks;
