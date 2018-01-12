import React, { Component } from 'react';
import TitleSection from './TitleSection.js';
import TeamItem from './our-team-section/TeamItem.js';

import FirstTeam from './../../styles/img/people.jpg';
import SecondTeam from './../../styles/img/people1.jpg';
import ThirdTeam from './../../styles/img/people2.jpg';
import FourthTeam from './../../styles/img/people3.jpg';

class OurTeam extends Component {
  render() {
    const TeamList = [
        {
            url: FirstTeam,
            title: 'Manny Delgado',
            text: 'a little boy',
        },

        {
            url: SecondTeam,
            title: 'Manny Delgado',
            text: 'a little boy',
        },

        {
            url: ThirdTeam,
            title: 'Luke Dunphy',
            text: 'NATO representative',
        },

        {
            url: FourthTeam,
            title: 'Mitchell Pritchett',
            text: 'ecology lawer',
        }
    ];
    
    return (
        <section className="our-team d-flex justify-content-center align-items-center">
            <div className="container text-center">

                <TitleSection name='Our team' />

                <TeamItem obj={TeamList} />
            </div>
        </section>
    );
  }
}

export default OurTeam;
