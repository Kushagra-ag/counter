import React from 'react';

function Increment(props) {

	return(
		<button onClick={props.handleInc}>Increment</button>
	)
}

export default Increment;