import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _map from 'lodash/map';

class TwitterItem extends Component {
  render() {
    return (
      <ul>
        {
          _map(this.props.obj, item => (
            <li className="list-item icon-tweet">
                <Link to='' className="footer-link">
                    <span>{item.title}</span>
                    <span className="color-secondary">{item.tags}</span>
                </Link>
                <p className="color-grey">— about {item.time} ago</p>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default TwitterItem;
