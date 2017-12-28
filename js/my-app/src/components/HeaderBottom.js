import React, { Component } from 'react';
import logo from './../styles/img/logo.png';

class HeaderBottom extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      	<div className="container">

                <h1>
                    <a href="">
                        <img src={logo} alt="logo" style={{width: 130, height: 48}} />
                    </a>
                </h1>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item hvr-sweep-to-bottom border-yellow">
                        <a href="index.html" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item hvr-sweep-to-bottom border-orange">
                        <a href="" className="nav-link">Typography</a>
                    </li>
                    <li className="nav-item hvr-sweep-to-bottom border-pink">
                        <a href="pages/blog-grid.html" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item hvr-sweep-to-bottom border-purple">
                        <a href="" className="nav-link">Pages</a>
                    </li>
                    <li className="nav-item hvr-sweep-to-bottom border-violet">
                        <a href="" className="nav-link">Elements</a>
                    </li>
                    <li className="nav-item hvr-sweep-to-bottom border-blue">
                        <a href="" className="nav-link">Ecommerse</a>
                    </li>
                    <li className="nav-item hvr-sweep-to-bottom border-aqua">
                        <a href="" className="nav-link">Mega Menu</a>
                    </li>
                </ul>
            </div>

        </div>
      </div>
    );
  }
}

export default HeaderBottom;