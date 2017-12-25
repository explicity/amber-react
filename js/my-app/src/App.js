import React, { Component } from 'react';

import InfoSection from './InfoSection';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import BuyNowSection from './BuyNowSection';

class App extends Component {
  render() {
    return (
      <div>
      	<Header /> 
      	<WelcomeSection /> 
        <InfoSection />
        <BuyNowSection />
      </div>
    );
  }
}

export default App;
