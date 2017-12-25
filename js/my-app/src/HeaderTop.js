import React, { Component } from 'react';

class HeaderTop extends Component {
  render() {
    return (
        <div className="header-top bg-black d-flex">
            <div className="container d-flex justify-content-between align-items-center">

                <form action="#" className="form-inline">
                    <input type="search" name="search" placeholder="Search" size="25" className="form-control" />
                    <button type="submit" className="btn">
                        <span className="sr-only">Search</span>
                    </button>
                </form>

                <ul className="navbar-nav">
                    <li>
                        <a href="" className="header-top-link icon-login">Login</a>
                    </li>
                    <li>
                        <a href="" className="header-top-link icon-register">Register</a>
                    </li>
                </ul>

            </div>
        </div>
    );
  }
}

export default HeaderTop;