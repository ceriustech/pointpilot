import React, { useState } from 'react';

const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34];

const Session = () => {
	const [username, setUsername] = useState('');
	const [usernameColor, setUsernameColor] = useState('');
	const [usernameIcon, setUsernameIcon] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		// logic to calculate the average value of checked fibonacci checkboxes
		// and link it to the sessionId
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>

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
				<label htmlFor="story-id">Story ID:</label>
				<input type="text" id="story-id" />
				<div>
					{fibonacci.map((value) => (
						<div key={value}>
							<input type="checkbox" id={`fib-${value}`} />
							<label htmlFor={`fib-${value}`}>{value}</label>
						</div>
					))}
				</div>
				<button type="submit">Submit</button>
			</form>
			<div>{/* Chat component */}</div>
		</div>
	);
};

export default Session;
