import React from 'react';
import Button from '../../global/components/Button/Button';
import { routes } from '../../routes/Routes';

const Home = () => {
	const path = routes[4].path;

	return (
		<div>
			<div>
				<h1>Estimate agile development issues with PointPilot</h1>
				<p>
					Make sprint planning easy and help streamline your development process
				</p>
			</div>
			<Button text={'Get started'} route={path} />
		</div>
	);
};

export default Home;
