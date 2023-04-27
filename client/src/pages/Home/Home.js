import React, { useState, useEffect } from 'react';
import Button from '../../global/components/Button/Button';
import { routes } from '../../routes/Routes';
import {
	Container,
	ContentWrapper,
	TextContent,
	Heading,
	SubHeading,
	ImageWrapper,
} from './styles';
import Background from './Background';
import Plane from './Plane';
import getSanityData from '../../Utility/Functions/sanityProvider';

const Home = () => {
	const [homeData, setHomeData] = useState([]);

	const createSessionRoute = routes.find((route) =>
		route.path.includes('create-session')
	);

	const path = createSessionRoute ? createSessionRoute.path : '/';

	useEffect(() => {
		return getSanityData('home', setHomeData);
	}, []);

	console.log('%cHOME DATA', 'font-size:2em;color:red');
	console.log(homeData);

	return (
		<Container id="home">
			<Background>
				<ContentWrapper id="content">
					<TextContent>
						<Heading>Collaborate with PointPilot</Heading>
						<SubHeading>
							Make sprint planning easy and help streamline your development
							process
						</SubHeading>
						<Button text={'Get started'} route={path} />
					</TextContent>
					<ImageWrapper>
						<Plane />
					</ImageWrapper>
				</ContentWrapper>
			</Background>
		</Container>
	);
};

export default Home;
