import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _map from 'lodash/map';

class NavigationMenu extends Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav ml-auto">
                {
                    _map(this.props.obj, item => (
                        <li className={`nav-item hvr-sweep-to-bottom ${item.cls}`}>
                            <Link to='/' className="nav-link">{item.text}</Link>
                        </li>
                    ))
                }
            </ul>
      </div>
    );
  }
}

export default NavigationMenu;