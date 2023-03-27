import React from 'react';
import Button from '../../global/components/Button/Button';
import { routes } from '../../routes/Routes';

const Guest = () => {
	const path = routes[5].path;

	return (
		<div>
			Guest
			<Button text={'Start session'} route={path} />
		</div>
	);
};

export default Guest;
