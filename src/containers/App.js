import React, { Component } from 'react';
import Tetris from '../components/Tetris';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import './App.css';

library.add(faPlayCircle, faPauseCircle);

const numberOfColumns = 10;
const numberOfRows = 20;

let piece = {
  type: '',
  format: []
};

piece.type = 'gamma';//needs to be random
switch (piece.type) {
  case 'straight':
    piece.format = [];
    break;
  case 'gamma':
    piece.format = [
      [true, false],
      [true, false],
      [true, true],
    ];
    break;
  default:
    piece.format = [];
    break;
}  

//random piece should start falling

//the activePiece should be spawned randomly in the beginning in a random C position (always begins as r:0)
const initalState = {
  tetrisBoard: Array(numberOfRows).fill(null).map(row => Array(numberOfColumns).fill(false)),
  activePiece: null
}

class App extends Component {
  constructor() {
    super();
    this.state= initalState;
  };

  componentDidMount() {}

  startGame = (event) => {
    const onTimerTick = () => {
      // let myBoard = this.buildingBoard();

      //re-renders after this setState!!!
      this.setState({activePiece: {
        r: this.state.activePiece.r + 1,
        c: this.state.activePiece.c
      }})
    }
    
    this.setState({
      activePiece: {
        format: 'gamma',
        r: 0,
        c: 4
      }
    });
    const myTimer = setInterval(onTimerTick, 500);
  }

  buildingBoard = () => {
    const board = _.cloneDeep(this.state.tetrisBoard);
    if (this.state.activePiece && this.state.activePiece.r + piece.format.length < 21) {
      //for loop here based on pieces height and width to draw all cells at once.
      for (let positionX = 0; positionX < piece.format[0].length; positionX++) {
        for (let positionY = 0; positionY < piece.format.length; positionY++){
          board[this.state.activePiece.r + positionY][this.state.activePiece.c + positionX] = piece.format[positionY][positionX];
        }
      }      
    }

    return board;
  }

  render() {
    const tetrisBoard = this.buildingBoard();

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
        <Tetris myBoard={tetrisBoard} startGame={this.startGame}></Tetris>
        <footer>
          {'Tetris game made my Nikos Manolas'}
        </footer>
      </div>
    );
  }
}

export default App;
