import React, { Component } from 'react';

class PostItem extends Component {
  render() {
    return (
      <div>
          <p>{this.props.time}</p>
          <a href="" className="color-secondary">{this.props.link}</a>
      </div>
    );
  }
}

export default PostItem;
