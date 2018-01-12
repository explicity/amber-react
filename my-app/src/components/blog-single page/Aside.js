import React, { Component } from 'react';

import Categories from './Categories.js';
import RecentComments from './RecentComments.js';
import LatestWorks from './LatestWorks.js';
import TagCloud from './TagCloud.js';

class Aside extends Component {
  render() {
    const CategoriesList = [
      'Creative portfolio',
      'Onmouseover category',
      'Amber golden',
      'Amsterdam fight gear',
      'Creamy cucumber'
    ];

    const CommentsList = [
      {
        title: 'Igor Ligay on',
        text: 'The hope of a young naval lieutenant bravely patrolling',
      },

      {
        title: 'Farhad Yusupov on',
        text: 'Politicians routinely exploited fears of crime',
      },

      {
        title: 'John Doe on',
        text: 'There was even a time when the Christian Coalition determined that its number one',
      }
    ];

    const TagList = [
      'bad boy',
      'winter',
      'is coming',
      'south',
      'mouseover',
      'asia',
      'surfing',
      'iceland',
      'she',
      'china',
      'daytona'
    ];

    return (
      <aside className="col-12 col-md-3 sidebar">
        <Categories obj={CategoriesList} />
        <RecentComments obj={CommentsList} />
        <LatestWorks />
        <TagCloud obj={TagList} />
      </aside>
    );
  }
}

export default Aside;
