import React, { Component } from 'react';
import _map from 'lodash/map';

class AddressItem extends Component {
  render() {
    return (
      <ul>
      	{
      		_map(this.props.obj, item => (
      			<li className={`list-item ${item.icon}`}>
      				<span>{item.name}</span>
                    <span className="color-grey">{item.text}</span>
      			</li>
      		))
      	}
      </ul>
    );
  }
}

export default AddressItem;