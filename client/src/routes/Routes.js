import Home from '../pages/Home';
import HowItWorks from '../pages/HowItWorks';
import Faq from '../pages/FAQ';
import CreateSession from '../pages/CreateSession';
import Session from '../pages/Session';

export const routes = [
	{
		id: 'home',
		type: 'primary',
		page: <Home />,
		name: 'Home',
		path: '/',
	},
	{
		id: 'how-it-works',
		type: 'primary',
		page: <HowItWorks />,
		name: 'How It Works',
		path: '/how-it-works',
	},
	{
		id: 'faq',
		type: 'primary',
		page: <Faq />,
		name: 'FAQ',
		path: '/faq',
	},
	{
		id: 'craate-session',
		type: 'secondary',
		page: <CreateSession />,
		name: 'Create Session',
		path: '/create-session',
	},
	{
		id: 'session',
		type: 'secondary',
		page: <Session />,
		name: 'Session',
		path: '/session/:id',
	},
];
