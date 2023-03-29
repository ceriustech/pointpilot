import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './styles';

export const Button = ({ text, route, disable, fn }) => {
	let button;

	if (route) {
		button = (
			<Link to={route}>
				<StyledButton disabled={disable}>{text}</StyledButton>
			</Link>
		);
	} else {
		button = <StyledButton onClick={fn}>{text}</StyledButton>;
	}

	return button;
};

export default Button;
