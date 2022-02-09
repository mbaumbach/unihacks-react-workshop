import { useState } from 'react';

export default function Counter({ label }) {
	const [counter, setCounter] = useState(0);

	function decrement() {
		setCounter(counter - 1);
	}

	function increment() {
		setCounter(counter + 1);
	}

	return (
		<div>
			<div>{label}</div>
			<div>
				<button type="button" onClick={decrement}>
					-
				</button>
				{counter}
				<button type="button" onClick={increment}>
					+
				</button>
			</div>
		</div>
	);
}
