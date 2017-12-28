import React, { Component } from 'react';

class WorkItem extends Component {
  render() {
    return (
      <div>
        <figure>
          <img src={this.props.url} alt="latest-work" style={{width: 290, height: 290}} className="works-list-img" />
          <figcaption className="figcaption d-flex justify-content-between">
              <div className="figcaption-info">
                  <h4>{this.props.title}</h4>
                  <p>{this.props.text}</p>
              </div>
              <div className="text-center">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                  <p>257</p>
              </div>
          </figcaption>
          <div className="links">
              <ul>
                  <li className="links-item">
                      <a href="" className="links-main">
                          <i className="fa fa-heart links-icon" aria-hidden="true"></i>
                      </a>
                  </li>
                  <li className="links-item">
                      <a href="pages/portfolio-grid.html" className="links-main">
                          <i className="fa fa-search-plus links-icon" aria-hidden="true"></i>
                      </a>
                  </li>
                  <li className="links-item">
                      <a href="" className="links-main">
                          <i className="fa fa-link links-icon" aria-hidden="true"></i>
                      </a>
                  </li>
              </ul>
          </div>
        </figure>
      </div>
    );
  }
}

export default WorkItem;