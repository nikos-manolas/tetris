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
const types = ['straightShaped', 'gammaShaped', 'sShaped', 'tShaped'];
let myTimer;
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
    //On each start Game button the previous interval is being cleared so a new one will start.
    clearInterval(myTimer);

    const onTimerTick = () => {
      // let myBoard = this.buildingBoard();

      //re-renders after this setState!!!
      this.setState({activePiece: {
        type: this.state.activePiece.type,
        format: this.state.activePiece.format,
        formatWithDirection: this.state.activePiece.formatWithDirection,
        r: this.state.activePiece.r + 1,
        c: this.state.activePiece.c
      }})
    }

    let piece = {
      type: '',
      format: [],
      formatWithDirection: []
    };

    piece.type = _.sample(types);//needs to be random
    switch (piece.type) {
      case 'straightShaped':
        piece.format = [
          [
            [true],
            [true],
            [true],
            [true]
          ],
          [
            [true, true, true, true]
          ]
        ];
        piece.formatWithDirection = _.sample(piece.format);
        break;
      case 'gammaShaped':
        piece.format = [
          [
            [true, false],
            [true, false],
            [true, true],
          ],
          [
            [false, false, true],
            [true, true, true]
          ], 
          [
            [true, true],
            [false, true],
            [false, true],
          ],
          [
            [true, true, true],
            [true, false, false]
          ],
          [
            [false, true],
            [false, true],
            [true, true],
          ],
          [
            [true, true, true],
            [false, false, true]
          ],
          [
            [true, true],
            [true, false],
            [true, false],
          ],
          [
            [true, false, false],
            [true, true, true]
          ]        
        ];
        piece.formatWithDirection = _.sample(piece.format);
        break;
      case 'sShaped':
        piece.format = [
          [
            [false, true],
            [true, true],
            [true, false],
          ],
          [
            [true, false],
            [true, true],
            [false, true],
          ],
          [
            [true, true, false],
            [false, true, true],
          ],
          [
            [false, true, true],
            [true, true, false],
          ],
        ];
        piece.formatWithDirection = _.sample(piece.format);
        break;
      case 'tShaped':
        piece.format = [
          [
            [true, true, true],
            [false, true, false]
          ],
          [
            [true, false],
            [true, true],
            [true, false]
          ],
          [
            [false, true],
            [true, true],
            [false, true]
          ],
          [
            [false, true, false],
            [true, true, true]
          ],
        ];
        piece.formatWithDirection = _.sample(piece.format);
        break;
      default:
        piece.format = [];
        piece.formatWithDirection = [];
        break;
    }
    
    //Need to get random column number based on the width of the piece and not based on numberOfColumns-4.
    // piece.formatWithDirection[0].length
    this.setState({
      activePiece: {
        type: piece.type,
        format: piece.format,
        formatWithDirection: piece.formatWithDirection,
        r: 0,
        c: _.random(0, numberOfColumns-piece.formatWithDirection[0].length)
      }
    });
    myTimer = setInterval(onTimerTick, 500);
  }

  buildingBoard = () => {
    const board = _.cloneDeep(this.state.tetrisBoard);
    let { activePiece } = this.state;
    if (activePiece) {
      let { r, c, formatWithDirection } = activePiece;
      if (r + formatWithDirection.length < 21) {
        //for loop here based on pieces height and width to draw all cells at once.
        for (let positionX = 0; positionX < formatWithDirection[0].length; positionX++) {
          for (let positionY = 0; positionY < formatWithDirection.length; positionY++){
            board[r + positionY][c + positionX] = formatWithDirection[positionY][positionX];
          }
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
