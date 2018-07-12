import React, { Component } from 'react';
import Header from './components/header';
import Progress from './components/progress'
import AudioPlaylist from './components/audioPlaylist'
import './App.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';
import { reducer as jPlaylists } from 'react-jplaylist';


/* Pass the jPlaylist reducer and it's initialStates to the store */
const store = createStore(combineReducers({ jPlayers, jPlaylists }));

class App extends Component {
  render() {
    return (
      <div className="APP">
        <Provider store={store}>
          <Header />
          <Progress />
          <AudioPlaylist />
        </Provider>
      </div>
    );
  }
}

export default App;
