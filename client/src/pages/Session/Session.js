import React, { useState, useContext } from 'react';
import AppContext from '../../contextProvider/AppContext';
import Button from '../../global/components/Button/Button';
import Date from '../../components/Date/Date';
import { urlFor } from '../../client';

const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34];

const Session = () => {
	const { sessionData } = useContext(AppContext);

	const { sessionId, sessionName, userName, usernameColor, usernameIcon } =
		sessionData;

	console.log('%cSESSION DATA', 'font-size:2em;color:orange');
	console.log(sessionData);

	const handleSubmit = (event) => {
		event.preventDefault();
		// logic to calculate the average value of checked fibonacci checkboxes
		// and link it to the sessionId
	};

	return (
		<div>
			<div>
				{sessionName && <p>{sessionName}</p>}
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
						{usernameIcon && (
							<img
								src={urlFor(usernameIcon.image)}
								alt={usernameIcon.altText}
								width="40"
								height="40"
							/>
						)}
						<p style={{ color: `${usernameColor}` }}>{userName}</p>
					</div>
					<Date />
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
