import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _map from 'lodash/map';

class PostItem extends Component {
  render() {
    return (
      <ul> 
      	{
      	  _map(this.props.obj, (item, index) => (
      	  	<li key={item.link}>
  	        	<p>{item.time}</p>	
          		<Link to='' className="color-secondary">{item.link}</Link>
          	</li>
      	  	))	
      	}
      </ul>
    );
  }
}

export default PostItem;
