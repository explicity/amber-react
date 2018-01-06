import React, { Component } from 'react';

import InfoSection from './main page/InfoSection';
import Header from './Header';
import WelcomeSection from './main page/WelcomeSection';
import BuyNowSection from './main page/BuyNowSection';
import LastWorks from './main page/LastWorks.js';
import Features from './main page/Features.js';
import Blockquote from './main page/Blockquote.js';
import BlogPosts from './main page/BlogPosts.js';
import Experience from './main page/Experience.js';
import OurTeam from './main page/OurTeam.js';
import Footer from './Footer.js';

class MainPage extends Component {
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

export default MainPage;
