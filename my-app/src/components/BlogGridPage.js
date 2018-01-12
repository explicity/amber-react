import React, { Component } from 'react'; 

import Header from './Header.js';
import HeadingSection from './HeadingSection.js';
import BlogGrid from './blog-grid page/BlogGrid.js';
import Footer from './Footer.js';

class BlogGridPage extends Component {
	render() {
		return (
			<div>
				<Header />
				<HeadingSection title='Blog grid view' />
				<BlogGrid />
				<Footer />
			</div>
		);
	}
}

export default BlogGridPage;