import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BlogItem from './../main page/blog-posts/BlogItem.js';

import FirstImg from './../../styles/img/arch.jpg';
import SecondImg from './../../styles/img/arch2.jpg';
import ThirdImg from './../../styles/img/arch3.jpg';
import FourthImg from './../../styles/img/arch4.jpg';
import FifthImg from './../../styles/img/arch5.jpg';
import SixthImg from './../../styles/img/arch6.jpg';
import SeventhImg from './../../styles/img/arch7.jpg';
import EighthImg from './../../styles/img/arch8.jpg';
import NinethImg from './../../styles/img/arch9.jpg';


const BlogGridList = [
  {
    url: FirstImg,
    title: 'Runway to Red Carpet: Awards Season',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
  },

  {
    url: SecondImg,
    title: 'The best games on PlayStation 4',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
  },

  {
    url: ThirdImg,
    title: 'Runway to Red Carpet: Awards Season',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
  },

  {
    url: FourthImg,
    title: 'Killzone Shadow Fall getting four player co-op',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
  },

  {
    url: FifthImg,
    title: 'Far Cry 4 announced; will be available on both',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
  },

  {
    url: SixthImg,
    title: 'Among the Sleep coming to PS4 expirience',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
  },

  {
    url: SeventhImg,
    title: 'Runway to Red Carpet: Awards Season',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
  },

  {
    url: EighthImg,
    title: 'Runway to Red Carpet: Awards Season',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
  },

  {
    url: NinethImg,
    title: 'Runway to Red Carpet: Awards Season',
    text: 'Her father worked on oil rigs and farms that through most of the Depression. But it is a new story that has seared into my genetic.',
  },
]

class BlogGrid extends Component {
  render() {
    return (
      <section className="blog-section">
        <div className="container">
          <BlogItem obj={BlogGridList} />

          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item active">
                <span className="page-link">
                  1
                  <span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="page-item"><Link to='/blogs' className="page-link">2</Link></li>
              <li className="page-item"><Link to='/blogs' className="page-link">3</Link></li>
              <li className="page-item"><Link to='/blogs' className="page-link">4</Link></li>
              <li className="page-item"><Link to='/blogs' className="page-link">5</Link></li>
              <li className="page-item"><Link to='/blogs' className="page-link">6</Link></li>
              <li className="page-item"><Link to='/blogs' className="page-link">7</Link></li>
              <p>...</p>
              <li className="page-item"><Link to='/blogs' className="page-link">2015</Link></li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default BlogGrid;
