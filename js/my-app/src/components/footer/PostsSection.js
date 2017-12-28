import React, { Component } from 'react';
import PostItem from './PostItem.js';
import TitleFooter from './TitleFooter.js';

const PostList1 = {
  time: 'September, 30',
  link: 'Candy canes dragée pudding. Donut cheesecake I love chocolate icing ',
}

const PostList2 = {
  time: 'April, 22',
  link: 'Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread',
}
const PostList3 = {
  time: 'May, 12',
  link: 'Cotton candy muffin tart gummies candy danish liquorice chupa chups tootsie roll',
}

class PostsSection extends Component {
  render() {
    return (
      <section className="col-12 col-md-6 col-lg-3 footer-top-item border-orange">
          <TitleFooter name='Popular posts' />
          <ul>
              <li>
                <PostItem 
                  time={PostList1.time}
                  link={PostList1.link}
                />
              </li>
              <li>
                <PostItem 
                  time={PostList2.time}
                  link={PostList2.link}
                />
              </li>
              <li>
                <PostItem 
                  time={PostList3.time}
                  link={PostList3.link}
                />
              </li>
          </ul>
      </section>
    );
  }
}

export default PostsSection;
