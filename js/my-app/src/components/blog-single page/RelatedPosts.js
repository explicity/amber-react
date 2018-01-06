import React, { Component } from 'react';

import _map from 'lodash/map';

class RelatedPosts extends Component {
  render() {
    return (
      <section className="related-posts">
        <h3 className="single-blog-title">Related posts</h3>
        <ul className="row">
          {
            _map(this.props.obj, item => (
              <li key={item.title} className="col-12 col-md-4">
                <i className="fa fa-keyboard-o" aria-hidden="true"></i>
                <p>{item.date}</p>
                <a href="" className="single-blog-link">{item.title}</a>
              </li>
            ))
          }
        </ul>
      </section>
    );
  }
}

export default RelatedPosts;
