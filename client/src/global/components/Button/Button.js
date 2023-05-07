import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './styles';

export const Button = ({ text, route, disable, fn, type }) => {
	const navigate = useNavigate();

	let button;

	if (route) {
		button = (
			<StyledButton
				disabled={disable}
				onClick={() => navigate(route)}
				type={type}
			>
				{text}
			</StyledButton>
		);
	} else {
		button = (
			<StyledButton onClick={fn} type={type}>
				{text}
			</StyledButton>
		);
	}

	return button;
};

export default Button;
