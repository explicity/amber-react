import React, { Component } from 'react';
import PostItem from './PostItem.js';
import TitleFooter from './TitleFooter.js';

const PostList = [
  {
    time: 'September, 30',
    link: 'Candy canes dragée pudding. Donut cheesecake I love chocolate icing ',
  },

  {
    time: 'April, 22',
    link: 'Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread',
  },

  {
    time: 'May, 12',
    link: 'Cotton candy muffin tart gummies candy danish liquorice chupa chups tootsie roll',
  }
]


class PostsSection extends Component {
  render() {
    return (
      <section className="col-12 col-md-6 col-lg-3 footer-top-item border-orange">
          <TitleFooter name='Popular posts' />
          <PostItem obj={PostList} />

      </section>
    );
  }
}

export default PostsSection;
