import React, { Component } from 'react';

class song extends Component {
  render() {
    return (
      <li>
        <h4>{this.props.title}</h4>
        <img src={this.props.thumbnail} alt={this.props.title} />
        <h5>By {this.props.artist}</h5>
        <audio controls="controls" src={this.props.media} />
      </li>
    );
  }
};

export default song;
