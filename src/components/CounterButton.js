import React from 'react';

function CounterButton(props) {

	if(props.type === "increase") {

		return(
			<button onClick={props.method}>Increment</button>
		)

	} else if(props.type === "decrease") {
		
		return(
			<button onClick={props.method}>Decrement</button>
		)
	}
}

export default CounterButton;