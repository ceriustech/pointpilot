import React from 'react';
import {
	CloudContainer,
	Cloud1,
	Cloud2,
	Cloud3,
	Cloud4,
	Cloud5,
} from './styles';

const Background = ({ children }) => {
	return (
		<CloudContainer>
			<Cloud1 />
			<Cloud2 />
			<Cloud3 />
			<Cloud4 />
			<Cloud5 />
			{children}
		</CloudContainer>
	);
};

export default Background;
