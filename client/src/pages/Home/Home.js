import React from 'react';
import Button from '../../global/components/Button/Button';
import { routes } from '../../routes/Routes';
import { Container } from './styles';

const Home = () => {
	const createSessionRoute = routes.find((route) =>
		route.path.includes('create-session')
	);
	const path = createSessionRoute ? createSessionRoute.path : '/';

	return (
		<Container>
			<div>
				<h1>Estimate agile development issues with PointPilot</h1>
				<p>
					Make sprint planning easy and help streamline your development process
				</p>
				<Button text={'Get started'} route={path} />
			</div>
		</Container>
	);
};

export default Home;
