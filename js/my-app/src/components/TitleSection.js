import React, { Component } from 'react';

class TitleSection extends Component {
  render() {
    return (
      <h3 className="title-section">{this.props.name}</h3>
    );
  }
}

export default TitleSection;