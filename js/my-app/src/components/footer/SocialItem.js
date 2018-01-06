import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _map from 'lodash/map';

class SocialItem extends Component {
  render() {
    return (
      <ul>
      	{
      		_map(this.props.obj, item => (
      			<li key={item.name} className={`${item.icon}`}>
      				<Link to='' className="list-item-social">{item.name}</Link>
      			</li>
      		))
      	}
      </ul>
    );
  }
}

export default SocialItem;
