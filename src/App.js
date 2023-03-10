import React from 'react';
import Header from './global/components/Header';
import Footer from './global/components/Footer';
import NavigationContainer from './global/components/Navigation/NavigationContainer';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes/Routes';

const Pages = routes.map(({ path, page }, key) => (
	<Route exact path={path} element={page} key={key} />
));

function App() {
	return (
		<div className="App">
			<Header>
				<NavigationContainer />
			</Header>
			<Routes>{Pages}</Routes>
			<Footer />
		</div>
	);
}

export default App;
