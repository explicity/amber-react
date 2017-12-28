import React, { Component } from 'react';

class BlogItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} alt="blog-post" style={{width: 290, height: 220}} className="blog-posts-img" />
        <h4>
            <a href="pages/blog-single.html" className="blog-posts-link">{this.props.title}</a>
        </h4>
        <p>{this.props.text}</p>
        <div className="d-flex justify-content-between">
            <a href="pages/blog-single.html" className="blog-posts-link">Learn more</a>
            <p className="icon-comment">450</p>
        </div>
      </div>
    );
  }
}

export default BlogItem;
