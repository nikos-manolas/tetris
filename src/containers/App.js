import React, { Component } from 'react';
import Tetris from '../components/Tetris';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faPlayCircle, faPauseCircle);

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

  componentDidMount() {}

  startGame = (event) => {
    //random piece should start falling
    //e.g straight one 4 cells
    let r = 0;
    let c = 4;
    let piece = {
      type: '',
      height: 0,
      width: 0
    };

    let counter = 0;
    piece.type = 'gamma';//needs to be random
    switch (piece.type) {
      case 'straight':
        piece.width = 0;
        piece.height = 4;
        break;
      case 'gamma':
        piece.width = 1;
        piece.height = 3;
        break;
      default:
        piece.height = 0;
        piece.width = 0;
        break;
    }

    const onTimerTick = () => {
      if (r > 19) {
        clearInterval(myTimer);
        return;
      }

      if (counter < piece.height) {
        if (r-piece.height > 0) {
          myBoard[r-piece.height][c] = false;
        }
      } else {
        myBoard[r-piece.height][c] = false;
        counter=0;
      }
      myBoard[r][c] = true;
      counter++;      
      r += 1;
      this.setState({
        tetrisBoard: myBoard
      })      
    }

    const myTimer = setInterval(onTimerTick, 500);
    
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
        <Tetris myBoard={this.state.tetrisBoard} startGame={this.startGame}></Tetris>
        <footer>
          {'Tetris game made my Nikos Manolas'}
        </footer>
      </div>
    );
  }
}

export default App;
