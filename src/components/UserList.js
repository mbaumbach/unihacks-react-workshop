import { useEffect, useState } from 'react';
import loadingIndicator from '../images/loader.gif';
import User from './User';
import './UserList.css';

export default function UserList() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [numberToLoad, setNumberToLoad] = useState(1);

	useEffect(() => {
		async function fetchUsers() {
			setLoading(true);
			const fetched = await fetch(
				`https://randomuser.me/api/?results=${numberToLoad}`
			);
			const fetchedUsers = await fetched.json();
			const mappedUsers = fetchedUsers.results.map(user => {
				return {
					id: user.login.uuid,
					first: user.name.first,
					last: user.name.last,
					picture: user.picture.thumbnail,
					email: user.email
				};
			});
			setUsers(mappedUsers);
			setLoading(false);
		}

		fetchUsers();
	}, [numberToLoad]);

	function onNumberToLoadChange(event) {
		const currentValue = event.currentTarget.value;
		setNumberToLoad(Math.max(1, currentValue));
	}

	return (
		<div>
			<div className="label-container">
				<label>
					<span>Users to load: </span>
					<input
						className="user-count-input"
						type="number"
						value={numberToLoad}
						onChange={onNumberToLoadChange}
						min={1}
					/>
				</label>
				{loading && (
					<div className="loading">
						Loading... <img src={loadingIndicator} alt="Loading" />
					</div>
				)}
			</div>
			<div className="user-list">
				{users.map(user => (
					<User
						key={user.id}
						first={user.first}
						last={user.last}
						avatar={user.picture}
						email={user.email}
					/>
				))}
			</div>
		</div>
	);
}
