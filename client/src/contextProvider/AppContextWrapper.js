import React from 'react';
import AppContext from './AppContext';

const AppContextWrapper = ({ children, sessionData, setSessionData }) => {
	return (
		<AppContext.Provider value={{ sessionData, setSessionData }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextWrapper;
