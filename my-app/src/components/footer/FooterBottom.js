import React, { Component } from 'react';

class FooterBottom extends Component {
  render() {
    return (
      <div className="footer-bottom d-flex justify-content-between">
          <div>
              <p>© 2014 StylemixThemes. All rights reserved.</p>
              <p>Powered by WordPress.</p>
          </div>
          <a href="#top" className="btn btn-lg btn-primary hvr-icon-up">Back to top of page</a>
      </div>
    );
  }
}

export default FooterBottom;
