import React, { Component } from 'react';

class TwitterItem extends Component {
  render() {
    return (
      <div>
        <a href="" className="footer-link">
            <span>{this.props.title}</span>
            <span className="color-secondary">{this.props.tags}</span>
        </a>
        <p className="color-grey">— about {this.props.time} ago</p>
      </div>
    );
  }
}

export default TwitterItem;
