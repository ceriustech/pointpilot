import React, { useState } from 'react';
import { ModalContainer, ModalContent } from './styles';

const Modal = () => {
	// State for controlling the visibility of the modal
	const [isOpen, setIsOpen] = useState(false);
	const [sessionCode, setSessionCode] = useState('');
	const [username, setUsername] = useState('');

	function handleSessionCode() {
		setSessionCode(Math.random().toString(36).substring(2, 8));
	}
	// Function for toggling the modal
	function handleModal() {
		setIsOpen(!isOpen);
	}

	function handleModalEvent(event) {
		event.stopPropagation();
	}

	return (
		<>
			<button onClick={handleModal}>Open Modal</button>
			{isOpen && (
				<ModalContainer onClick={handleModal}>
					<ModalContent onClick={handleModalEvent}>
						<form>
							<label htmlFor="username">Username:</label>
							<input
								type="text"
								id="username"
								value={username}
								onChange={(event) => setUsername(event.target.value)}
							/>
						</form>
						<div>
							<button onClick={handleSessionCode}>Generate Session Code</button>
							<h1>Session Code: {sessionCode}</h1>
						</div>
					</ModalContent>
				</ModalContainer>
			)}
		</>
	);
};

export default Modal;
