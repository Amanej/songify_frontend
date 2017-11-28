import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Song from './components/song.js';
import data from './assets/data.json';

const realSongs = data;
const _songs = realSongs.map((song) =>
  <Song title={song.title} artist={song.artist} thumbnail={song.thumbnail} media={song.media} />
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SteemCloud</h1>
        </header>
        <p className="App-intro">
          Search to find songs, and click to play. Enjoy!
        </p>
        <ul className="songList">
          {_songs}
        </ul>
      </div>
    );
  }
}

export default App;
