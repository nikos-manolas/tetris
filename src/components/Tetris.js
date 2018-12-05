import React from 'react';
import './Tetris.css';

const rows = [];
const columns = [];
for (let column = 0; column < 10; column++) {
	columns.push(<td key={column}>&nbsp;&nbsp;&nbsp;&nbsp;</td>)
}
for(let row = 0; row < 20; row++) {
	rows.push(<tr key={row}>{columns}</tr>);
}

const Tetris = () => {
	return (
		<div className = "container">
			<table className = "grid">
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
}

export default Tetris;