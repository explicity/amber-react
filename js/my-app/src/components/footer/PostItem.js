import React, { Component } from 'react';
import _map from 'lodash/map';

class PostItem extends Component {
  render() {
    return (
      <div> 
      	{
      	  _map(this.props.obj, (item, index) => (
      	  	<div className="post-item">
  	        	<p>{item.time}</p>	
          		<a href="" className="color-secondary">{item.link}</a>
          	</div>
      	  	))	
      	}
      </div>
    );
  }
}

export default PostItem;
