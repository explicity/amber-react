import React, { Component } from 'react';

class FeaturesItem extends Component {
  render() {
    return (
      <div>
          <h4>{this.props.title}</h4>
          <p>{this.props.text}</p>
      </div>
    );
  }
}

export default FeaturesItem;
