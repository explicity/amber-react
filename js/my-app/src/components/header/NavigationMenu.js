import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationMenu extends Component {
  render() {
    return (
      <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item hvr-sweep-to-bottom border-yellow">
                    <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item hvr-sweep-to-bottom border-orange">
                    <Link to='' className="nav-link">Typography</Link>
                </li>
                <li className="nav-item hvr-sweep-to-bottom border-pink">
                    <Link to='' href="pages/blog-grid.html" className="nav-link">Blog</Link>
                </li>
                <li className="nav-item hvr-sweep-to-bottom border-purple">
                    <Link to='' className="nav-link">Pages</Link>
                </li>
                <li className="nav-item hvr-sweep-to-bottom border-violet">
                    <Link to='' className="nav-link">Elements</Link>
                </li>
                <li className="nav-item hvr-sweep-to-bottom border-blue">
                    <Link to='' className="nav-link">Ecommerse</Link>
                </li>
                <li className="nav-item hvr-sweep-to-bottom border-aqua">
                    <Link to='' className="nav-link">Mega Menu</Link>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;