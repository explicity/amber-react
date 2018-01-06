import React, { Component } from 'react';

import ArticleSection from './ArticleSection.js';

class MainSection extends Component {
  render() {
    return (
      <section className="single-blog">
        <div className="container">
          <div className="row">
            <ArticleSection />
          </div>
        </div>
      </section>
    );
  }
}

export default MainSection;
