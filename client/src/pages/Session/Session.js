import React, { useState, useContext } from 'react';
import AppContext from '../../contextProvider/AppContext';

const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34];

const Session = () => {
	const { sessionData } = useContext(AppContext);
	console.log('%cSESSION DATA', 'font-size:2em;color:orange');
	console.log(sessionData);

	const { sessionId, sessionName, userName, userNameColor, userNameIcon } =
		sessionData;

	const handleSubmit = (event) => {
		event.preventDefault();
		// logic to calculate the average value of checked fibonacci checkboxes
		// and link it to the sessionId
	};

	return (
		<div>
			<div>
				<p>Host Name: {userName}</p>
			</div>

			<div>
				<p>Session ID: {sessionId}</p>
			</div>
			<div>
				<p>Story ID:</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<div>
						<p>{userName}</p>
					</div>
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
