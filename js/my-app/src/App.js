import React, { Component } from 'react';

import InfoSection from './InfoSection';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import BuyNowSection from './BuyNowSection';
import LastWorks from './LastWorks.js';
import Features from './Features.js';
import Blockquote from './Blockquote.js';
import BlogPosts from './BlogPosts.js';
import Experience from './Experience.js';
import OurTeam from './OurTeam.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<WelcomeSection />
        <InfoSection />
        <LastWorks />
        <BuyNowSection />
        <Features />
        <Blockquote />
        <BlogPosts />
        <Experience />
        <OurTeam />
        <Footer />
      </div>
    );
  }
}

export default App;
