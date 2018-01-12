import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <form action="#" className="form-inline">
        <input type="search" name="search" placeholder="Search" size="25" className="form-control" />
        <button type="submit" className="btn">
            <span className="sr-only">Search</span>
        </button>
      </form>
    );
  }
}

export default SearchForm;