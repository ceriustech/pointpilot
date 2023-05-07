import React from 'react';

function isTodaysDate() {
	const currentDate = new Date();
	const formattedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}).format(currentDate);

	return formattedDate;
}

const CurrentDate = () => {
	return <div>{isTodaysDate()}</div>;
};

export default CurrentDate;
