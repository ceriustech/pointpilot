import React, { useState } from 'react';
import Button from '../../global/components/Button/Button';
import { routes } from '../../routes/Routes';

const Guest = () => {
	const [sessionCode, setSessionCode] = useState('');
	const [username, setUsername] = useState('');
	const [usernameColor, setUsernameColor] = useState('');
	const [usernameIcon, setUsernameIcon] = useState('');

	function updatePath(id) {
		const path = routes[5].path.replace('id', id);

		return path;
	}

	function handleSessionCode() {
		const code = Math.random().toString(36).substring(2, 8);
		setSessionCode(code);
	}

	function handleUsername(event) {
		setUsername(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		// logic to calculate the average value of checked fibonacci checkboxes
		// and link it to the sessionId
	}

	const isSessionCodeGenerated = sessionCode !== '';

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					value={username}
					onChange={handleUsername}
				/>
				<label htmlFor="username-color">Username Color:</label>
				<input
					type="color"
					id="username-color"
					value={usernameColor}
					onChange={(event) => setUsernameColor(event.target.value)}
				/>
				<label htmlFor="username-icon">Username Icon:</label>
				<input
					type="file"
					id="username-icon"
					onChange={(event) =>
						setUsernameIcon(URL.createObjectURL(event.target.files[0]))
					}
				/>
				<div>
					<Button fn={handleSessionCode} text={'Generate Session Code'} />
					<p>Session Code: {sessionCode}</p>
				</div>
				<Button
					text={'Create session'}
					route={updatePath(sessionCode)}
					disable={!isSessionCodeGenerated}
				/>
			</form>
		</div>
	);
};

export default Guest;
