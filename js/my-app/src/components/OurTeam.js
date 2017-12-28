import React, { Component } from 'react';
import TitleSection from './TitleSection.js';
import TeamItem from './our-team-section/TeamItem.js';

import FirstTeam from './../styles/img/people.jpg';
import SecondTeam from './../styles/img/people1.jpg';
import ThirdTeam from './../styles/img/people2.jpg';
import FourthTeam from './../styles/img/people3.jpg';

const TeamList1 = {
    url: FirstTeam,
    title: 'Manny Delgado',
    text: 'a little boy',
}

const TeamList2 = {
    url: SecondTeam,
    title: 'Manny Delgado',
    text: 'a little boy',
}

const TeamList3 = {
    url: ThirdTeam,
    title: 'Luke Dunphy',
    text: 'NATO representative',
}

const TeamList4 = {
    url: FourthTeam,
    title: 'Mitchell Pritchett',
    text: 'ecology lawer',
}

class OurTeam extends Component {
  render() {
    return (
        <section className="our-team d-flex justify-content-center align-items-center">
            <div className="container text-center">

                <TitleSection name='Our team' />

                <ul className="row">

                    <li className="col-12 col-sm-6 col-lg-3 our-team-item">
                        <TeamItem 
                            url={TeamList1.url}
                            title={TeamList1.title}
                            text={TeamList1.text}
                        />
                    </li>

                    <li className="col-12 col-sm-6 col-lg-3 our-team-item">
                        <TeamItem 
                            url={TeamList2.url}
                            title={TeamList2.title}
                            text={TeamList2.text}
                        />
                    </li>

                    <li className="col-12 col-sm-6 col-lg-3 our-team-item">
                        <TeamItem 
                            url={TeamList3.url}
                            title={TeamList3.title}
                            text={TeamList3.text}
                        />
                    </li>

                    <li className="col-12 col-sm-6 col-lg-3 our-team-item">
                        <TeamItem 
                            url={TeamList4.url}
                            title={TeamList4.title}
                            text={TeamList4.text}
                        />
                    </li>

                </ul>
            </div>
        </section>
    );
  }
}

export default OurTeam;
