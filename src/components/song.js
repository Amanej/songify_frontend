import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class song extends Component {
  constructor(props) {
    super(props);
    //this.state = {isToggleOn: true};
    this.state = {
      playing: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  stopAllPlaying() {
    //var audioNodes = ReactDOM.findDOMNode("audio");
    console.log("Audio nodes");
    //console.log(audioNodes);
  }
  handleClick(e) {
    e.preventDefault();
    /*
    console.log(this);
    console.log(e);
    console.log("state");
    console.log(this.state);
    */

    this.stopAllPlaying();

    var playing = this.state.playing;
    if(!playing) {
      this.refs.audio.play();
    } else {
      this.refs.audio.pause();
    }

    // Update state
    this.setState({playing: !playing});
  }
  render() {
    return (
      <li className={this.state.playing ? 'live' : 'notlive'} >
        <h4><span className="playingIcon"></span> {this.props.title}</h4>
        <img src={this.props.thumbnail} alt={this.props.title} onClick={this.handleClick} playing={this.state.playing.toString()} />
        <h5 onClick={this.props.handler}>By {this.props.artist}</h5>
        <audio className="individualSongPlayer" controls="controls" src={this.props.media} ref="audio" />
      </li>
    );
  }
};

export default song;
