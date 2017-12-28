import React, { Component } from 'react';

import InfoSection from './components/InfoSection';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import BuyNowSection from './components/BuyNowSection';
import LastWorks from './components/LastWorks.js';
import Features from './components/Features.js';
import Blockquote from './components/Blockquote.js';
import BlogPosts from './components/BlogPosts.js';
import Experience from './components/Experience.js';
import OurTeam from './components/OurTeam.js';
import Footer from './components/Footer.js';

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
