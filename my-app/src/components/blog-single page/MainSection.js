import React, { Component } from 'react';

import ArticleSection from './ArticleSection.js';
import Aside from './Aside.js';

class MainSection extends Component {
  render() {
    return (
      <section className="single-blog">
        <div className="container">
          <div className="row">
            <ArticleSection />
            <Aside />
          </div>
        </div>
      </section>
    );
  }
}

export default MainSection;
