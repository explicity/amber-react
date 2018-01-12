import React, { Component } from 'react';

import SearchForm from './SearchForm.js';
import AccountSettings from './AccountSettings.js';
import PortfolioHeader from './PortfolioHeader.js';

class HeaderTop extends Component {
  render() {
    const currentPath = window.location.pathname;

    return (
        <div className="header-top bg-black d-flex">
            <div className="container d-flex justify-content-between align-items-center">
                <SearchForm />
                {!currentPath.includes('portfolio') ? <AccountSettings /> : <PortfolioHeader />}
            </div>
        </div>
    );
  }
}

export default HeaderTop;