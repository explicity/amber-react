import React, { Component } from 'react';

class SocialItem extends Component {
  render() {
    return (
      <a href="" className="list-item-social">{this.props.name}</a>
    );
  }
}

export default SocialItem;
