import React, { useState } from 'react';
import { ModalContainer, ModalContent } from './styles';

function Modal({ children }) {
	// State for controlling the visibility of the modal
	const [isOpen, setIsOpen] = useState(false);

	// Function for opening the modal
	const openModal = () => {
		setIsOpen(true);
	};

	// Function for closing the modal
	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button onClick={openModal}>Open Modal</button>
			{isOpen && (
				<ModalContainer onClick={closeModal}>
					<ModalContent onClick={(event) => event.stopPropagation()}>
						{children}
					</ModalContent>
				</ModalContainer>
			)}
		</>
	);
}

export default Modal;
