import React from 'react';
import { Link } from 'react-router-dom';
import NavigationItem from '../NavigationItem';
import { NavContainer } from './styles';
import { routes } from '../../../../routes/Routes';

const NavigationContainer = () => {
	const navItem = routes
		.filter(({ type }) => type === 'primary')
		.map((item) => <NavigationItem data={item} key={item.id} />);

	return (
		<NavContainer className="nav-container">
			<Link to="/" className="logo">
				<div>Logo</div>
			</Link>
			{navItem}
		</NavContainer>
	);
};

export default NavigationContainer;
