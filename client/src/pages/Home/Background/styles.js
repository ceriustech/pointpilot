import styled, { keyframes } from 'styled-components';

const cloudsAnimation = keyframes`
  0% {
    right: -100%;
  }
  100% {
    right: 120%;
  }
`;

const Cloud = styled.div`
	box-shadow: inset -2px -3px 0 0 #f7e7eb;
	position: absolute;
	border-radius: 50%;
	width: 12px;
	height: 12px;
	left: -3px;
	bottom: 0;
	background: #fafbf0;
	z-index: 10;

	&:first-child {
		& + div {
			transform: scale(1.6, 1.6);
			margin: 0 0 4px 13px;
			z-index: 9;

			& + div {
				transform: scale(2.4, 2.4);
				margin: 0 0 9px 32px;
				z-index: 8;

				& + div {
					transform: scale(1.3, 1.3);
					margin: 0 0 2px 50px;
					z-index: 7;
				}
			}
		}
	}

	.tiny & {
		transform: scale(0.5);
	}

	.small & {
		transform: scale(1);
	}

	.normal & {
		transform: scale(2);
	}

	.large & {
		transform: scale(4);
	}
`;

const CloudsContainer = styled.div`
	position: absolute;
	top: 33px;
	width: 54px;
	height: 5px;
`;

const CloudLarge = styled(CloudsContainer)`
	animation: ${cloudsAnimation} 263s infinite linear;
	margin-left: 20%;
`;

const CloudNormal = styled(CloudsContainer)`
	animation: ${cloudsAnimation} 99s infinite linear;
	margin-left: 90%;
`;

const CloudSmall = styled(CloudsContainer)`
	animation: ${cloudsAnimation} 142s infinite linear;
	margin-left: 50%;
`;

const CloudTiny = styled(CloudsContainer)`
	animation: ${cloudsAnimation} 152s infinite linear;
	margin-left: 43%;
`;

const BackgroundContainer = styled.div`
	background-color: #6dd3e7;
	height: 100vh;
	overflow-x: hidden;
	padding: 100px;
	position: relative;
`;

const TextWrapper = styled.div`
	position: relative;
	z-index: 2;
`;

export {
	Cloud,
	CloudLarge,
	CloudNormal,
	CloudSmall,
	CloudTiny,
	BackgroundContainer,
	TextWrapper,
};
