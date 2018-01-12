import React, { Component } from 'react';
import Btn from './../Btn.js';
import TitleSection from './TitleSection.js';

class InfoSection extends Component {
  render() {
    return (
      <div className="info-section">
    		<div className="container text-center">
        		<TitleSection name='Steal of the month' />
       			<p className="title-content">That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our trials
        		and triumphs became at once unique and universal.</p>
        		<Btn name='Purchase now' />
    		</div>
      </div>
    );
  }
}

export default InfoSection;
