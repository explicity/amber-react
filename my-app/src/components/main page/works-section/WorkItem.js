import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

import _map from 'lodash/map';

class WorkItem extends Component {
  render() {
    return (
      <ul className="row works-list" id="controls">
        {
          _map(this.props.obj, item => (
            <li key={item.id} className="col-12 col-lg-4 works-list-item">
              <figure>
                <img src={item.url} alt="latest-work" style={{width: 290, height: 290}} className="works-list-img" />
                <figcaption className="figcaption d-flex justify-content-between">
                    <div className="figcaption-info">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                    <div className="text-center">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <p>257</p>
                    </div>
                </figcaption>
                <div className="links">
                    <ul>
                        <li className="links-item">
                            <Link to='/singleportfolio' className="links-main">
                                <i className="fa fa-heart links-icon" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li className="links-item">
                            <Link to='/portfolio' className="links-main">
                                <i className="fa fa-search-plus links-icon" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li className="links-item">
                            <Link to='' className="links-main">
                                <i className="fa fa-link links-icon" aria-hidden="true"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
              </figure>
            </li>
            ))
        }
      </ul>
    );
  }
}

export default WorkItem;