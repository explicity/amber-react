import React, { Component } from 'react';

import _map from 'lodash/map';

class PortfolioDescription extends Component {
  render() {
    return (
      <div className="description">
        <h4 className="description-title">Work description</h4>
        <ul className="description-list">
          {
            _map(this.props.obj, name => (
                <li className="description-list-item">
                  <p>{name}</p>
                </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default PortfolioDescription;
