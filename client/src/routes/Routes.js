import Home from '../pages/Home';
import HowItWorks from '../pages/HowItWorks';
import Faq from '../pages/FAQ';
import Donate from '../pages/Donate';
import CreateSession from '../pages/CreateSession';
import Session from '../components/Session';

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
		id: 'donate',
		type: 'primary',
		page: <Donate />,
		name: 'Donate',
		path: '/donate',
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
