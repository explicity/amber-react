import React, { Component } from 'react';

class Btn extends Component {
  render() {
    return (
      <a href="" className="btn btn-lg btn-primary">{this.props.name}</a>   
    );
  }
}

export default Btn;