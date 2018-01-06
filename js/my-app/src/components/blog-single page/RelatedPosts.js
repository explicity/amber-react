import React, { Component } from 'react';

import _map from 'lodash/map';

class RelatedPosts extends Component {
  render() {
    return (
      <section class="related-posts">
        <h3 class="single-blog-title">Related posts</h3>
        <ul class="row">
          {
            _map(this.props.obj, item => (
              <li key={item.title} class="col-12 col-md-4">
                <i class="fa fa-keyboard-o" aria-hidden="true"></i>
                <p>{item.date}</p>
                <a href="#" class="single-blog-link">{item.title}</a>
              </li>
            ))
          }
        </ul>
      </section>
    );
  }
}

export default RelatedPosts;
