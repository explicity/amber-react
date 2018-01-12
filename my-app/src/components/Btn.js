import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Btn extends Component {
  render() {
    return (
      <Link to='' className="btn btn-lg btn-primary">{this.props.name}</Link>   
    );
  }
}

export default Btn;