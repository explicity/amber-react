import React, { Component } from 'react';
import Btn from './../Btn.js';
import _map from 'lodash/map';

class TeamItem extends Component {
  render() {
    return (
      <div className='row'>
        {
          _map(this.props.obj, item => (
            <div className='col-12 col-sm-6 col-lg-3 our-team-item'>
              <div className="wrapper">
                <figure>
                    <img src={item.url} alt="our-team" style={{width: 208, height: 280}} className="our-team-img" />
                    <div className="cover">
                        <figcaption className="cover-info">
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </figcaption>
                        <p>Be who you are and say what you feel, because those who mind don't matter.</p>
                    </div>
                </figure>
                <Btn name='Profile' />
              </div>
            </div>
            ))
        }
      </div>
    );
  }
}

export default TeamItem;
