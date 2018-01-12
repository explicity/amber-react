import React, { Component } from 'react';

import Header from './Header';
import HeadingSection from './HeadingSection.js';
import MainSection from './blog-single page/MainSection.js';
import CommentsSection from './blog-single page/CommentsSection.js';
import Footer from './Footer.js';

class BlogSinglePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeadingSection title='Blog post title goes here' />
        <MainSection />
        <CommentsSection />
        <Footer />
      </div>
    );
  }
}

export default BlogSinglePage;
