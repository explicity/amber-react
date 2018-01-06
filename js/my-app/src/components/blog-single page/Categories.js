import React, { Component } from 'react';

import _map from 'lodash/map';

class Categories extends Component {
  render() {
    return (
    	<section className="sidebar-categories">
        	<h3 className="single-blog-title">Categories</h3>
        	<ul className="sidebar-categories-list">
        		{
        			_map(this.props.obj, item => (
			        	<li key={item} className="sidebar-item border-bottom">
			            	<a href="" className="sidebar-link">{item}</a>
			          	</li>
        			))
        		}
        	</ul>
        </section>
    );
  }
}

export default Categories;
