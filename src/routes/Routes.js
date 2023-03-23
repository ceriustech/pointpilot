import Home from '../pages/Home';
import Faq from '../pages/FAQ';
import Session from '../components/Session';

export const routes = [
	{
		id: 'home',
		page: <Home />,
		name: 'Home',
		path: '/',
	},
	{
		id: 'faq',
		page: <Faq />,
		name: 'FAQ',
		path: '/faq',
	},
	{
		id: 'session',
		page: <Session />,
		name: 'Session',
		path: '/session/:id',
	},
];
