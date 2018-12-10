import React, { Component } from 'react';
import Tetris from '../components/Tetris';
import './App.css';

const numberOfColumns = 10;
const numberOfRows = 20;

let myBoard = Array(numberOfRows).fill(null).map(row => Array(numberOfColumns).fill(false));

const initalState = {
  tetrisBoard: myBoard  
}

class App extends Component {
  constructor() {
    super();
    this.state= initalState;
  };

  componentDidMount() {
    console.log("heeey");
    let r = 0;
    let c = 1;
    setInterval(() => {
      r += 1;
      c += 1;
      myBoard[r][c] = true;
      this.setState({
        tetrisBoard: myBoard
      })
      if (c === 9) { c = 0}
      if (r === 19) { r = 0}
    }, 1000)

  }

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
        <Tetris myBoard={this.state.tetrisBoard}></Tetris>
        <footer>
          {'Tetris game made my Nikos Manolas'}
        </footer>
      </div>
    );
  }
}

export default App;
