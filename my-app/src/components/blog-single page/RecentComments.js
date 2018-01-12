import React, { Component } from 'react';

import _map from 'lodash/map';

class RecentComments extends Component {
  render() {
    return (
      <section className="sidebar-comments">
        <h3 className="single-blog-title">Recent comments</h3>
        <ul className="sidebar-comments-list">
          {
            _map(this.props.obj, item => (
                <li key={item.title} className="sidebar-item border-bottom">
                  <p>{item.title}</p>
                  <a href="" className="sidebar-link">{item.text}</a>
                </li>
            ))
          }
        </ul>
      </section>
    );
  }
}

export default RecentComments;
