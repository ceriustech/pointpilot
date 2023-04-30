import React from 'react';
import { CloudContainer, Cloud, TextWrapper } from './styles';

const Background = ({ children }) => {
	const animationDurations = [
		263, 99, 142, 152, 215, 139, 109, 121, 101, 126, 96, 83,
	];

	const clouds = Array.from({ length: 12 }, (_, index) => (
		<Cloud
			key={index}
			className={`cloud-${index + 1}`}
			size={getCloudSize(index)}
			duration={animationDurations[index]}
			marginLeft={getCloudMarginLeft(index)}
		>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</Cloud>
	));

	function getCloudSize(index) {
		if (index === 0 || index === 4) {
			return 'large';
		} else if (index === 1 || index === 5 || index === 9) {
			return 'normal';
		} else if (index === 2 || index === 6 || index === 8 || index === 12) {
			return 'small';
		} else {
			return 'tiny';
		}
	}

	function getCloudMarginLeft(index) {
		return [20, 90, 50, 43, 83, 73, 69, 100, 10, 14, 73, 51][index] + '%';
	}

	return (
		<CloudContainer>
			{clouds}
			<TextWrapper>{children}</TextWrapper>
		</CloudContainer>
	);
};

export default Background;
