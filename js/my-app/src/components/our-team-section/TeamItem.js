import React, { Component } from 'react';
import Btn from './../Btn.js';

class TeamItem extends Component {
  render() {
    return (
      <div className="wrapper">
        <figure>
            <img src={this.props.url} alt="our-team" style={{width: 208, height: 280}} className="our-team-img" />
            <div className="cover">
                <figcaption className="cover-info">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.text}</p>
                </figcaption>
                <p>Be who you are and say what you feel, because those who mind don't matter.</p>
            </div>
        </figure>
        <Btn name='Profile' />
      </div>
    );
  }
}

export default TeamItem;
