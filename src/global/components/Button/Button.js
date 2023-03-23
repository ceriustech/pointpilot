import React from 'react';
import { Link } from 'react-router-dom';
import Guest from '../../../pages/Guest';
import { StyledButton } from './styles';

export const Button = ({ text, route }) => {
	let button;

	if (route) {
		button = (
			<Link to={route}>
				<StyledButton>{text}</StyledButton>
			</Link>
		);
	} else {
		button = <StyledButton>{text}</StyledButton>;
	}

	return button;
};

export default Button;
