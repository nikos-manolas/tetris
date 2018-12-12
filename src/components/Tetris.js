import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Tetris.css';

const Tetris = ({myBoard, startGame}) => {
	return (
		<div className = "container relative">
			<table>
				<tbody>
				{myBoard.map((row, rowIndex) => 
					<tr key={rowIndex}>
						{ row.map((cell, columnIndex) => <td className={`${cell ? 'filled' : ''}`} key={`${rowIndex},${columnIndex}`}></td>	)}
					</tr>
				)}
				</tbody>
			</table>
			<div className = "absolute pa3 mt2" style= {{border: '1px solid black', background: 'green', bottom:'40%', right:'10%'}}>
				<a className="grow no-underline br-pill ba ph3 pv2 mb2 dib white" href="#0" onClick={startGame} title='Click to play'><FontAwesomeIcon icon="play-circle"/></a>
				<a className="grow no-underline br-pill ba ph3 pv2 mb2 dib white" href="#0" title='Click to pause'><FontAwesomeIcon icon="pause-circle"/></a>
			</div>
		</div>
	);
}

export default Tetris;