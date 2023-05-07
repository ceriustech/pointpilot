import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './styles';

export const Button = ({ text, route, disable, fn, type }) => {
	let button;

	if (route) {
		button = (
			<Link to={route}>
				<StyledButton disabled={disable} type={type}>
					{text}
				</StyledButton>
			</Link>
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
