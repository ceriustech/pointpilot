import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../../contextProvider/AppContext';
import { PointerCard, UserNameWrapper } from './styles';
import Chart from '../../components/Chart/Chart';
import Button from '../../global/components/Button/Button';
import FibonacciPointer from '../../global/components/FibonacciPointer';
import Date from '../../components/Date/Date';
import { urlFor } from '../../client';
import io from 'socket.io-client';

const Session = () => {
	const [selectedFibonacci, setSelectedFibonacci] = useState(0);
	const { sessionData } = useContext(AppContext);

	const { sessionId, sessionName, userName, usernameColor, usernameIcon } =
		sessionData;

	function handleFibonacciChange(value) {
		setSelectedFibonacci(value);
	}

	useEffect(() => {
		const socket = io('http://localhost:3001');

		socket.on('news', (data) => {
			console.log(data);
		});

		socket.emit('my event', { my: 'data' });

		return () => {
			socket.disconnect();
		};
	}, []);

	console.log('%cSELECTED FIB DATA', 'font-size:2em;color:yellow');
	console.log(selectedFibonacci);

	function handleSubmit(event) {
		event.preventDefault();
		// logic to calculate the average value of checked fibonacci checkboxes
		// and link it to the sessionId
	}

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
			{/* <Chart /> */}
			<Date />
			<form onSubmit={handleSubmit}>
				<PointerCard>
					<UserNameWrapper>
						{usernameIcon && (
							<img
								src={urlFor(usernameIcon.image)}
								alt={usernameIcon.altText}
								width="40"
								height="40"
							/>
						)}
						<p style={{ color: `${usernameColor}` }}>{userName}</p>
					</UserNameWrapper>
					<FibonacciPointer onSelectionChange={handleFibonacciChange} />
				</PointerCard>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Session;
