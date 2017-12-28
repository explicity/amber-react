import React, { Component } from 'react';
import SearchForm from './SearchForm.js';
import AccountSettings from './AccountSettings.js';

class HeaderTop extends Component {
  render() {
    return (
        <div className="header-top bg-black d-flex">
            <div className="container d-flex justify-content-between align-items-center">
                <SearchForm />
                <AccountSettings />
            </div>
        </div>
    );
  }
}

export default HeaderTop;