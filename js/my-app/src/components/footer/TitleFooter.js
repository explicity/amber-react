import React, { Component } from 'react';

class TitleFooter extends Component {
  render() {
    return (
      <h4 className="footer-top-heading">{this.props.name}</h4>
    );
  }
}

export default TitleFooter;
