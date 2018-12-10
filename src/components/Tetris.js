import React from 'react';
import './Tetris.css';

const Tetris = ({myBoard}) => {
	return (
		<div className = "container">
			<table className = "grid">
				<tbody>
				{myBoard.map((row, rowIndex) => 
					<tr key={rowIndex}>
						{ row.map((cell, columnIndex) => <td className={`${cell ? 'filled' : ''}`} key={`${rowIndex},${columnIndex}`}></td>	)}
					</tr>
				)}
				</tbody>
			</table>
		</div>
	);
}

export default Tetris;