import React from 'react';
import Header from './global/components/Header';
import Footer from './global/components/Footer';
import SessionManager from './contextProvider/SessionManager';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes/Routes';

const Pages = routes.map(({ path, page }, key) => (
	<Route exact path={path} element={page} key={key} />
));

function App() {
	return (
		<SessionManager>
			<div className="App">
				<Header />
				<Routes>{Pages}</Routes>
				<Footer />
			</div>
		</SessionManager>
	);
}

export default App;
