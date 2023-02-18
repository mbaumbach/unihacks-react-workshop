export async function fetchUsers(numberToLoad) {
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
	return mappedUsers;
}
