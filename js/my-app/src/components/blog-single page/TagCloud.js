import React, { Component } from 'react';

import _map from 'lodash/map';

class TagCloud extends Component {
  render() {
    return (
      <section className="sidebar-cloud tags">
        <h3 className="single-blog-title">Tag cloud</h3>
        <ul className="tags-cloud">
          {
            _map(this.props.obj, item => (
              <li key={item}>
                <a href="" className="tags-link tags-cloud-link">{item}</a>
              </li>
            ))
          }
        </ul>
      </section>
    );
  }
}

export default TagCloud;
