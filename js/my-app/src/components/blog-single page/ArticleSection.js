import React, { Component } from 'react';

import img from './../../styles/img/blog-title.jpg'; 
import FirstImg from './../../styles/img/sepia1.jpg';
import SecondImg from './../../styles/img/sepia2.jpg';
import ThirdImg from './../../styles/img/sepia3.jpg';

const RelatedList = [
  {
    date: 'June 24',
    title: 'The hope of a young naval lieutenant bravely patrolling',
  },

  {
    date: 'August 8',
    title: 'Politicians routinely exploited fears of crime Christian Coalition',
  },

  {
    date: 'August 13',
    title: 'There was even a time when the Christian Coalition determined that its number one',
  }
]

class ArticleSection extends Component {
  render() {
    return (
        <div className="col-12 col-md-9">
          <img src={img} alt="blog-post" className="single-blog-img-main" />
          <article className="single-blog-article">
            <h3 className="single-blog-title">These are the Americans that I know</h3>
            <p>No health care? The market will fix it. I have come here to seek a new beginning between the United States and Muslims around the world; one based upon mutual interest and mutual respect; and one based upon the truth that America and Islam are not exclusive, and need not be in competition. On economic development, we will create a new corps of business volunteers to partner with counterparts in Muslim-majority countries.</p>
            <blockquote className="single-blog-blockquote">
              <p>Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances and with no small facility.</p>
              <footer>— Moby-Dick, Herman Melville</footer>
            </blockquote>
            <p>Tell that to the proud auto workers at a Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because they knew there were people who counted on the brakes that they made. 
            </p>
          </article>

          <article className="single-blog-article border-bottom">
            <h3 className="single-blog-title">Michigan plant who, after they found</h3>
            <p>Tell that to the proud auto workers at a Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because they knew there were people who counted on the brakes that they made. </p>
            <p>Michigan plant who, after they found
            It was closing, kept showing up every day and working as hard as ever, because they knew there were people who counted on the brakes that they made. Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because. Tell that to the proud auto workers at a Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because they knew there were people who counted on the brakes that they made. </p>
            <p>Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because they knew there were people who counted on the brakes that they made. Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because.</p>
            <ul className="row mt-4">
             <li className="col-12 col-md-4 text-center"><img src={FirstImg} alt="blog-example" className="single-blog-img" /></li>
             <li className="col-12 col-md-4 text-center"><img src={SecondImg} alt="blog-example" className="single-blog-img" /></li>
             <li className="col-12 col-md-4 text-center"><img src={ThirdImg} alt="blog-example" className="single-blog-img" /></li>
            </ul>
           <p>Because they knew there were people who counted on the brakes that they made. Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because they knew there were people who counted on the brakes that they made. Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because.</p>
           <p>Tell that to the proud auto workers at a Michigan plant who, after they found out it was closing, kept showing up every day and working as hard as ever, because they knew there were people who counted on the brakes that they made.</p>
          </article>

          <section className="tags">
            <span className="tags-header">Tags: </span>
            <ul className="tags-list">  
              <li>
                <a href="" className="tags-link">amber</a>
                <span>, </span>
              </li>
              <li>
                <span><a href="" className="tags-link">dance</a>, </span>
              </li>
              <li>
                <span><a href="" className="tags-link">fashion</a>, </span>
              </li>
              <li>
                <span><a href="" className="tags-link">sultan</a>, </span>
              </li>
              <li>
                <a href="" className="tags-link">onmouseover tag</a>
              </li>
            </ul>
          </section>
      </div>
    );
  }
}

export default ArticleSection;
