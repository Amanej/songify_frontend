import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Song from './components/song.js';
import data from './assets/data.json';

const realSongs = data;
/*const _songs = realSongs.map((song) =>
  <Song title={song.title} artist={song.artist} thumbnail={song.thumbnail} media={song.media} key={song.title} handler={this.handler} />
);*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: "https://images.genius.com/7eaf6be556255dff3972593e4ff42eb3.1000x1000x1.jpg",
      song: "https://soundcloud.com/wavey-hefner/lil-pump-gucci-gang-prod-bighead-gnealz"
    }

    this.handler = this.handler.bind(this);
  }
  handler(song,e) {
    //console.log(e);
    console.log(song);
    //e.preventDefault();
    //console.log(this.state);
    //console.log(this.props);

    this.refs.main_audio.pause();


    this.setState({
      thumbnail: song.thumbnail,
      song: song.media
    });

    console.log(this);

    this.refs.main_audio.play();

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SteemCloud</h1>
          <p className="App-intro">
          Search to find songs, and click to play. Enjoy!
          </p>
        </header>
        <ul className="songList">
          {
            realSongs.map((song) =>
              <Song title={song.title} artist={song.artist} thumbnail={song.thumbnail} media={song.media} key={song.title} handler={this.handler.bind(null,song)} />
            )
          }
        </ul>
        <p>{this.state.thumbnail}</p>
        <p>{this.state.song}</p>
        <audio controls="controls" ref="main_audio" src={this.state.song} />
      </div>
    );
  }
}

export default App;
