import React from 'react';
import Icons from '../Icons/Icons';
import { ScrollableContainer } from './styles';

const Scrollable = ({ handleIconSelection }) => {
	return (
		<ScrollableContainer>
			<Icons handleIconSelection={handleIconSelection} />
		</ScrollableContainer>
	);
};

export default Scrollable;
