import React from 'react';
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

const Home = () => {
	const createSessionRoute = routes.find((route) =>
		route.path.includes('create-session')
	);
	const path = createSessionRoute ? createSessionRoute.path : '/';

	return (
		<Container>
			<Background>
				<ContentWrapper>
					<TextContent>
						<Heading>Estimate agile development issues with PointPilot</Heading>
						<SubHeading>
							Make sprint planning easy and help streamline your development
							process
						</SubHeading>
					</TextContent>
					<Button text={'Get started'} route={path} />
				</ContentWrapper>
			</Background>
			
		</Container>
	);
};

export default Home;
