import styled, { keyframes } from 'styled-components';

const moveClouds = keyframes`
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
`;

export const CloudContainer = styled.div`
	height: 100%;
	background: #c9dbe9;
	background: -webkit-linear-gradient(top, #87b0dc 0%, #fff 100%);
	background: -linear-gradient(top, #c9dbe9 0%, #fff 100%);
	background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);
`;

export const Cloud = styled.div`
	width: 200px;
	height: 60px;
	background: #fff;
	border-radius: 200px;
	-moz-border-radius: 200px;
	-webkit-border-radius: 200px;
	position: relative;
	top: 50%;

	&:before,
	&:after {
		content: '';
		position: absolute;
		background: #fff;
		width: 100px;
		height: 80px;
		position: absolute;
		top: -15px;
		left: 10px;
		border-radius: 100px;
		-moz-border-radius: 100px;
		-webkit-border-radius: 100px;
		-webkit-transform: rotate(30deg);
		transform: rotate(30deg);
		-moz-transform: rotate(30deg);
	}

	&:after {
		width: 120px;
		height: 120px;
		top: -55px;
		left: auto;
		right: 15px;
	}
`;

export const Cloud1 = styled(Cloud)`
	animation: ${moveClouds} 15s linear infinite;
`;

export const Cloud2 = styled(Cloud)`
	left: 200px;
	transform: scale(0.6);
	opacity: 0.6;
	animation: ${moveClouds} 25s linear infinite;
	z-index: 1;
`;

export const Cloud3 = styled(Cloud)`
	left: -250px;
	top: 250px;
	transform: scale(0.8);
	opacity: 0.8;
	animation: ${moveClouds} 20s linear infinite;
	z-index: 1;
`;

export const Cloud4 = styled(Cloud)`
	left: 470px;
	top: 50px;
	transform: scale(0.75);
	opacity: 0.75;
	animation: ${moveClouds} 18s linear infinite;
	z-index: 1;
`;

export const Cloud5 = styled(Cloud)`
	left: -150px;
	top: -150px;
	transform: scale(0.8);
	opacity: 0.8;
	animation: ${moveClouds} 20s linear infinite;
	z-index: 1;
`;

export const TextWrapper = styled.div`
	position: relative;
	z-index: 2;
`;
