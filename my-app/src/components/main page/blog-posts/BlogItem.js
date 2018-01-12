import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _map from 'lodash/map';

class BlogItem extends Component {
  render() {
    return (
      <ul className="row justify-content-center">
        {
          _map(this.props.obj, item => (
            <li key={item.url} className="col-12 col-lg-4 blog-posts-item">
                <img src={item.url} alt="blog-post" style={{width: 290, height: 220}} className="blog-posts-img" />
                <h4>
                    <Link to='/singleblog' className="blog-posts-link">{item.title}</Link>
                </h4>
                <p>{item.text}</p>
                <div className="d-flex justify-content-between">
                    <Link to='/singleblog' className="blog-posts-link">Learn more</Link>
                    <p className="icon-comment">450</p>
                </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default BlogItem;
