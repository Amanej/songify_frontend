import React, { Component } from 'react';


class song extends Component {
  constructor(props) {
    super(props);
    //this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log(this);
    console.log(e);
    console.log("Play this song");
    this.refs.audio.play();
  }
  render() {
    return (
      <li>
        <h4>{this.props.title}</h4>
        <img src={this.props.thumbnail} alt={this.props.title} onClick={this.handleClick} />
        <h5>By {this.props.artist}</h5>
        <audio controls="controls" src={this.props.media} ref="audio" />
      </li>
    );
  }
};

export default song;
