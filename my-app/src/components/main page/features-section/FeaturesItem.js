import React, { Component } from 'react';

import _map from 'lodash/map';

class FeaturesItem extends Component {
  render() {
    return (
      <ul className="row">
      	{
      		_map(this.props.obj, item => (
      			<li key={item.title} className={`col-12 col-md-6 features-list-item ${item.cls}`}>
      		        <h4>{item.title}</h4>
          			<p>{item.text}</p>
      			</li>

      		))
      	}
      </ul>
    );
  }
}

export default FeaturesItem;
