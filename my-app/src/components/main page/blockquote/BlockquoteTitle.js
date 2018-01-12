import React, { Component } from 'react';

class BlockquoteTitle extends Component {
  render() {
    return (
      <div>
        <blockquote className="main icon-quotes">
          <div className="container text-center">
              <p className="blockquote-main">Thereby, the whale commanders are enabled to recognise each other upon the ocean, even at considerable distances
              and with no small facility.</p>
              <p className="blockquote-author">— Moby-Dick, Herman Melville</p>
          </div>
        </blockquote>
      </div>
    );
  }
}

export default BlockquoteTitle;
