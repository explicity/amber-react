import React, { Component } from 'react';

class ExperienceItem extends Component {
  render() {
    return (
      <div>
        <div className={`pie-wrapper ${this.props.cls}`}>
            <img src={this.props.url} alt="company-exp" className="experience-img" />
            <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
            </div>
        </div>
        <p className="label">{this.props.num}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default ExperienceItem;
