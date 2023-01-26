import { useState } from 'react';

export default function Counter({ label }) {
	const [count, setCount] = useState(0);

	function decrement() {
		setCount(count - 1);
	}

	function increment() {
		setCount(count + 1);
	}

	return (
		<div>
			<div>{label}</div>
			<div>
				<button type="button" onClick={decrement}>
					-
				</button>
				{count}
				<button type="button" onClick={increment}>
					+
				</button>
			</div>
		</div>
	);
}
