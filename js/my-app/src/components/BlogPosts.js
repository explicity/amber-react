import React, { Component } from 'react';
import TitleSection from './TitleSection.js';
import BlogItem from './blog-posts/BlogItem.js';

import FirstBlog from './../styles/img/arch.jpg';
import SecondBlog from './../styles/img/arch2.jpg'; 
import ThirdBlog from './../styles/img/arch3.jpg';

const BlogList1 = {
    url: FirstBlog,
    title: 'Runway to Red Carpet: Awards Season',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
}

const BlogList2 = {
    url: SecondBlog,
    title: 'Runway to Red Carpet: Awards Season',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
}
 
const BlogList3 = {
    url: ThirdBlog,
    title: 'Runway to Red Carpet: Awards Season',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
}

class BlogPosts extends Component {
  render() {
    return (
    <section className="blog-posts d-flex justify-content-center align-items-center">
        <div className="container">

            <header className="text-center">
                <TitleSection name='Latest blog posts' />
            </header>

            <ul className="row justify-content-center">
                <li className="col-12 col-lg-4 blog-posts-item">
                    <BlogItem
                        url={BlogList1.url}
                        title={BlogList1.title}
                        text={BlogList1.text}
                    />
                </li>
                <li className="col-12 col-lg-4 blog-posts-item">
                    <BlogItem
                        url={BlogList2.url}
                        title={BlogList2.title}
                        text={BlogList2.text}
                    />
                </li>
                <li className="col-12 col-lg-4 blog-posts-item">
                    <BlogItem
                        url={BlogList3.url}
                        title={BlogList3.title}
                        text={BlogList3.text}
                    />
                </li>
            </ul>
        </div>

    </section>
    );
  }
}

export default BlogPosts;
