import './Button.css';

export default function Button({ type = 'secondary', onClick, children }) {
	return (
		<button
			type="button"
			className={`button button--${type}`}
			onClick={onClick}>
			{children}
		</button>
	);
}
