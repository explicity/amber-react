import React, { Component } from 'react';

class HeadingSection extends Component {
  render() {
    return (
    <section className="title-blog">
      <div className="title-blog-main">
        <div className="container">
          <h2>{this.props.title}</h2>

          <div className="title-blog-secondary d-flex justify-content-between">

            <ul className="row align-items-center">
              <li className="list-item">
                <p className="icon-user">by Alex Poushkin</p>
              </li>
              <li className="list-item">
                <p className="icon-time">September 31</p>
              </li>
              <li className="list-item">
                <p className="icon-comments">12 Comments</p>
              </li>
            </ul>

            <div aria-label="breadcrumb" role="navigation" className="d-flex align-items-center">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">Home</a></li>
                <li className="breadcrumb-item"><a href="">Shortcodes</a></li>
                <li className="breadcrumb-item"><a href="">Typography</a></li>                
                <li className="breadcrumb-item"><a href="">Blog</a></li>
              </ol>
            </div>

          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default HeadingSection;
