import React, { Component } from 'react';

import InfoSection from './components/main page/InfoSection';
import Header from './components/Header';
import WelcomeSection from './components/main page/WelcomeSection';
import BuyNowSection from './components/main page/BuyNowSection';
import LastWorks from './components/main page/LastWorks.js';
import Features from './components/main page/Features.js';
import Blockquote from './components/main page/Blockquote.js';
import BlogPosts from './components/main page/BlogPosts.js';
import Experience from './components/main page/Experience.js';
import OurTeam from './components/main page/OurTeam.js';
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
