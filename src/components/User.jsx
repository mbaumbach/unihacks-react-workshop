import './User.css';

// Random user images:
// https://randomuser.me/api/portraits/women/8.jpg
// https://randomuser.me/api/portraits/men/8.jpg

export default function User({
	first,
	last,
	avatar,
	email
}) {
	return (
		<div className="user">
			<img
				className="user__thumbnail"
				src={avatar}
				alt={`${first} ${last}`}
			/>
			<div className="user__details">
				<h1 className="user__name">
					{first} {last}
				</h1>
				<div className="user__email">{email}</div>
			</div>
		</div>
	);
}
