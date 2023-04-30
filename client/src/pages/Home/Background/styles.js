import styled, { css, keyframes } from 'styled-components';

// Test

const cloudsAnimation = keyframes`
  0% {
    right: -100%;
  }
  100% {
    right: 120%;
  }
`;

const cloudSizes = {
	tiny: 0.5,
	small: 1,
	normal: 2,
	large: 4,
};

const CloudContainer = styled.div`
	height: 100%;
	background: #c9dbe9;
	background: -webkit-linear-gradient(top, #c9dbe9 0%, #fff 100%);
	background: -linear-gradient(top, #c9dbe9 0%, #fff 100%);
	background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);
	overflow: hidden;
`;

const Cloud = styled.div`
	animation: ${cloudsAnimation} ${({ duration }) => duration}s infinite linear;
	border-radius: 10px;
	position: relative;
	margin: 0 0 0 ${({ marginLeft }) => marginLeft};
	width: 54px;
	height: 5px;
	background: #f2ddda;

	${({ size }) =>
		size &&
		css`
			transform: scale(${cloudSizes[size]});
		`}

	& > div {
		box-shadow: inset -2px -3px 0 0 #f2ddda;
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
	}
`;

const TextWrapper = styled.div`
	position: relative;
	z-index: 2;
`;

export { CloudContainer, Cloud, TextWrapper };
