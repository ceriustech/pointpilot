import React, { useState } from 'react';
import Button from '../../global/components/Button/Button';
import { routes } from '../../routes/Routes';

const CreateSession = () => {
	const [sessionCode, setSessionCode] = useState('');
	const [username, setUsername] = useState('');
	const [usernameColor, setUsernameColor] = useState('');
	const [usernameIcon, setUsernameIcon] = useState('');

	function updatePath(id) {
		const getSessionRoute = routes.find((route) => route.path.includes('id')) || [];
		let path = getSessionRoute.path;

		if (getSessionRoute.length > 0) {
			path = getSessionRoute.path.replace('id', id);
		}

		return path;
	}

	function handleSessionCode() {
		const code = Math.random().toString(36).substring(2, 8);
		setSessionCode(code);
	}

	function handleSessionName(event) {
		setUsername(event.target.value);
	}

	function handleUserName(event) {
		setUsername(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	const isSessionCodeGenerated = sessionCode !== '';

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="sessionName">Session Name:</label>
				<input
					type="text"
					id="sessionName"
					value={username}
					onChange={handleSessionName}
				/>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					value={username}
					onChange={handleUserName}
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

export default CreateSession;
