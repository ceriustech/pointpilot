import React, { useState } from 'react';
import { ModalContainer, ModalContent } from './styles';
import Button from '../../global/components/Button';

const Modal = () => {
	// State for controlling the visibility of the modal
	const [isOpen, setIsOpen] = useState(false);
	const [sessionCode, setSessionCode] = useState('');
	const [username, setUsername] = useState('');
	const [usernameColor, setUsernameColor] = useState('');
	const [usernameIcon, setUsernameIcon] = useState('');

	function handleSessionCode() {
		setSessionCode(Math.random().toString(36).substring(2, 8));
	}

	function handleUsername(event) {
		setUsername(event.target.value);
	}
	// Function for toggling the modal
	function handleModal() {
		setIsOpen(!isOpen);
	}

	function handleModalEvent(event) {
		event.stopPropagation();
	}

	function handleSubmit(event) {
		event.preventDefault();
		// logic to calculate the average value of checked fibonacci checkboxes
		// and link it to the sessionId
	}

	return (
		<>
			<button onClick={handleModal}>Get Started</button>
			{isOpen && (
				<ModalContainer onClick={handleModal}>
					<ModalContent onClick={handleModalEvent}>
						<form onSubmit={handleSubmit}>
							<label htmlFor="username">Username:</label>
							<input
								type="text"
								id="username"
								value={username}
								onChange={handleUsername}
								autoCompleteValue="off"
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
							<Button type="submit" text={'Submit'} />
						</form>
						<div>
							<Button
								onClick={handleSessionCode}
								text={'Generate Session Code'}
							/>
							<h1>Session Code: {sessionCode}</h1>
						</div>
					</ModalContent>
				</ModalContainer>
			)}
		</>
	);
};

export default Modal;
