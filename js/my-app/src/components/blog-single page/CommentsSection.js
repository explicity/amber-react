import React, { Component } from 'react';

import AddComments from './AddComments.js';
import AllComments from './AllComments.js';

class CommentsSection extends Component {
  render() {
    const AddList = [
      {
        name: 'name',
        type: 'text',
        label: 'Name',
      },

      {
        name: 'email',
        type: 'email',
        label: 'Email',
      },

      {
        name: 'website',
        type: 'text',
        label: 'Website (optional)',
      }
    ];

    const CommentsList = [
      {
        id: 1,
        user: 'Administrator',
        cls: '',
      },

      {
        id: 2,
        user: 'Alina',
        cls: 'comment-reply',
      },

      {
        id: 3,
        user: 'Administrator',
        cls: '', 
      },
    ];

    return (
      <section className="comment-section">
        <div className="container">
          <div className="row">
            <AddComments obj={AddList} />
            <AllComments obj={CommentsList} />
          </div>
        </div>
      </section>
    );
  }
}

export default CommentsSection;
