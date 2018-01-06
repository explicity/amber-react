import React, { Component } from 'react';

import _map from 'lodash/map';

class AllComments extends Component {
  render() {
    return (
      <div className="col-12 col-md-9">
        {
          _map(this.props.obj, item => (
            <article key={item.id} className={`comment-section-info ${item.cls}`}>
              <header>
                <div className="d-flex justify-content-between">
                  <a href="" >{item.user}</a>
                  <a href="" className="reply-link">Reply</a>
                </div>
                <p>September 17, 2013 @ 1:38 pm</p>
              </header>
              <p>Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth bitters next level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit cornhole, occaecat put a bird on it single-origin coffee Tonx. Small batch 3 wolf moon ad, adipisicing fap cornhole.</p>
            </article>
          ))
        }
      </div>
    );
  }
}

export default AllComments;
