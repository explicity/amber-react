import React, { Component } from 'react';

import _map from 'lodash/map';

class AddComment extends Component {
  render() {
    return (
      <div className="col-12 col-md-9 add-comment">

        <h3 className="single-blog-title">Add comment</h3>

        <form>
          <div className="row">
            {
              _map(this.props.obj, item => (
                <div key={item.label} className="col-12 col-md-4 mb-3">
                  <label htmlFor={item.name}>{item.label}</label>
                  <input type={item.type} name={item.name} id={item.name} className="w-100 add-comment-input" />
                </div>
              ))
            }
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" className="w-100 mb-4 add-comment-input"></textarea>
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-lg btn-primary">Add comment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddComment;
