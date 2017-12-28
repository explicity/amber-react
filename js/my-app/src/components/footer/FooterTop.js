import React, { Component } from 'react';
import AddressSection from './AddressSection.js';
import TwitterSection from './TwitterSection.js';
import SocialSection from './SocialSection.js';
import PostsSection from './PostsSection.js';

class FooterTop extends Component {
  render() {
    return (
      <div className="footer-top">
            <div className="row">
                <AddressSection />
                <TwitterSection />
                <SocialSection />
                <PostsSection />
            </div>
        </div>
    );
  }
}

export default FooterTop;
