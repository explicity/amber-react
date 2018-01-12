import React, { Component } from 'react';

import _map from 'lodash/map';

class ExperienceItem extends Component {
  render() {
    return (
      <ul className="row">
        {
          _map(this.props.obj, item => (
            <li key={item.url} className={`col-12 ${item.col} experience-list-item`}>
              <div className={`pie-wrapper ${item.cls}`}>
                  <img src={item.url} alt="company-exp" className="experience-img" />
                  <div className="pie">
                      <div className="left-side half-circle"></div>
                      <div className="right-side half-circle"></div>
                  </div>
              </div>
              <p className="label">{item.num}</p>
              <p>{item.text}</p>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default ExperienceItem;