import React, { Component } from 'react';
import TitleSection from './TitleSection.js';
import BlogItem from './blog-posts/BlogItem.js';

import FirstBlog from './../../styles/img/arch.jpg';
import SecondBlog from './../../styles/img/arch2.jpg'; 
import ThirdBlog from './../../styles/img/arch3.jpg';


class BlogPosts extends Component {
  render() {
    const BlogList = [
        {
            url: FirstBlog,
            title: 'Runway to Red Carpet: Awards Season',
            text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
        }, 

        {
            url: SecondBlog,
            title: 'Runway to Red Carpet: Awards Season',
            text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
        },

        {
            url: ThirdBlog,
            title: 'Runway to Red Carpet: Awards Season',
            text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
        }
    ];

    return (
    <section className="blog-posts d-flex justify-content-center align-items-center">
        <div className="container">
            <header className="text-center">
                <TitleSection name='Latest blog posts' />
            </header>

            <BlogItem obj={BlogList} />
        </div>

    </section>
    );
  }
}

export default BlogPosts;
