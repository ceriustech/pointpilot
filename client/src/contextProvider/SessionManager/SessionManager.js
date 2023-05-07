import React, { useState } from 'react';
import AppContextWrapper from '../AppContextWrapper';

const SessionManager = ({ children }) => {
	const [sessionData, setSessionData] = useState({});

	return (
		<AppContextWrapper
			sessionData={sessionData}
			setSessionData={setSessionData}
		>
			{children}
		</AppContextWrapper>
	);
};

export default SessionManager;
