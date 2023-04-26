import React from 'react';
import {
	AirplaneAnimation,
	PlaneContainer,
	Main,
	MainBefore,
	MainAfter,
	WingOne,
	WingTwo,
	WingTwoAfter,
	WingTwoBefore,
	Pollution,
	PollutionBefore,
	PollutionAfter,
} from './styles';

const Plane = () => {
	return (
		<AirplaneAnimation>
			<PlaneContainer>
				<Main>
					<MainBefore />
					<MainAfter />
				</Main>
				<WingOne />
				<WingTwo>
					<WingTwoAfter />
					<WingTwoBefore />
				</WingTwo>
				<Pollution>
					<PollutionBefore />
					<PollutionAfter />
				</Pollution>
			</PlaneContainer>
		</AirplaneAnimation>
	);
};

export default Plane;
