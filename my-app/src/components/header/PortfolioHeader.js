import React, { Component } from 'react';

class PortfolioHeader extends Component {
  render() {
    return (
        <div className="header-portfolio">
              <ul className="navbar-nav">
                <li>
                  <a href="" className="header-top-link icon-login ">Login</a>
                </li>
                <li>
                  <a href="" className="header-top-link icon-wishlist">Wishlist</a>
                </li>
                <li>
                  <a href="" className="header-top-link icon-logout">Log out</a>
                </li>
              </ul>

              <div>
                <a href="" className="header-top-link icon-basket">26 items in Cart</a>
              </div>
        </div>
    );
  }
}

export default PortfolioHeader;
