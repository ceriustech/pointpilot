import styled, { css } from 'styled-components';
import { BASE_COLORS, TEXT_COLORS } from '../../styles/Colors';

const { lightGrey } = BASE_COLORS;
const { black } = TEXT_COLORS;

export const StyledButton = styled.button`
	${({ size }) => {
		switch (size) {
			case 'large':
				size = 'large';
				break;
			case 'medium':
				size = 'large';
				break;
			default:
				size = 'small';
		}

		return css`
			background-color: ${lightGrey};
			border: none;
			border-radius: 0.5rem;
			color: ${black};
			cursor: pointer;
			font-size: 1rem;
			padding: 0.5rem 1rem;

			&:disabled {
				opacity: 0.5;
			}
		`;
	}}
`;
