import React from 'react';
import {
	BackgroundContainer,
	Cloud,
	CloudLarge,
	CloudNormal,
	CloudSmall,
	CloudTiny,
	TextWrapper,
} from './styles';

const Background = ({ children }) => {
	return (
		<BackgroundContainer>
			<CloudLarge className="cloud large cloud-1">
				<Cloud />
				<Cloud />
				<Cloud />
				<Cloud />
			</CloudLarge>
			<CloudNormal className="cloud normal cloud-2">
				<Cloud />
				<Cloud />
				<Cloud />
				<Cloud />
			</CloudNormal>
			<CloudSmall className="cloud small cloud-3">
				<Cloud />
				<Cloud />
				<Cloud />
				<Cloud />
			</CloudSmall>
			<CloudTiny className="cloud tiny cloud-4">
				<Cloud />
				<Cloud />
				<Cloud />
				<Cloud />
			</CloudTiny>
			<TextWrapper>{children}</TextWrapper>
		</BackgroundContainer>
	);
};

export default Background;
