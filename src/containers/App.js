import React, { Component } from 'react';
import Tetris from '../components/Tetris';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className = 'main-nav'>
          <ul>
            <li><a href='./'>Game</a></li>
            <li><a href='./leaderboard'>Leaderboard</a></li>
            <li><a href='./profile'>Profile</a></li>
            <li><a href='./about'>About</a></li>
            <li className='push'><a href='./logout'>Logout</a></li>
          </ul>
        </nav>
        <Tetris></Tetris>
        <footer>
          {'Tetris game made my Nikos Manolas'}
        </footer>
      </div>
    );
  }
}

export default App;
