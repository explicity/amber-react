import React, { Component } from 'react';
import FirstBlog from './styles/img/arch.jpg';
import SecondBlog from './styles/img/arch2.jpg';
import ThirdBlog from './styles/img/arch3.jpg';

class BlogPosts extends Component {
  render() {
    return (
    <section className="blog-posts d-flex justify-content-center align-items-center">
        <div className="container">

            <h3 className="title-section text-center">Latest blog posts</h3>

            <ul className="row justify-content-center">
                <li className="col-12 col-lg-4 blog-posts-item">
                    <img src={FirstBlog} alt="blog-post" style={{width: 290, height: 220}} className="blog-posts-img" />
                    <h4>
                        <a href="pages/blog-single.html" className="blog-posts-link">Runway to Red Carpet: Awards Season</a>
                    </h4>
                    <p>Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that
                    has seared into my genetic.</p>
                    <div className="d-flex justify-content-between">
                        <a href="pages/blog-single.html" className="blog-posts-link">Learn more</a>
                        <p className="icon-comment">450</p>
                    </div>
                </li>
                <li className="col-12 col-lg-4 blog-posts-item">
                    <img src={SecondBlog} alt="blog-post" style={{width: 290, height: 220}}  className="blog-posts-img" />
                    <h4>
                        <a href="pages/blog-single.html" className="blog-posts-link">Runway to Red Carpet: Awards Season</a>
                    </h4>
                    <p>Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that
                    has seared into my genetic.</p>
                    <div className="d-flex justify-content-between">
                        <a href="pages/blog-single.html" className="blog-posts-link">Learn more</a>
                        <p className="icon-comment">450</p>
                    </div>
                </li>
                <li className="col-12 col-lg-4 blog-posts-item">
                    <img src={ThirdBlog} alt="blog-post" style={{width: 290, height: 220}}  className="blog-posts-img" />
                    <h4>
                        <a href="pages/blog-single.html" className="blog-posts-link">Runway to Red Carpet: Awards Season</a>
                    </h4>
                    <p>Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that
                    has seared into my genetic.</p>
                    <div className="d-flex justify-content-between">
                        <a href="pages/blog-single.html" className="blog-posts-link">Learn more</a>
                        <p className="icon-comment">450</p>
                    </div>
                </li>
            </ul>
        </div>

    </section>
    );
  }
}

export default BlogPosts;
