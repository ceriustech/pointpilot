import Home from '../pages/Home';
import Faq from '../pages/FAQ';
import HowItWorks from '../pages/HowItWorks';
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
		id: 'howItWorks',
		page: <HowItWorks />,
		name: 'How it works',
		path: '/how-it-works',
	},
	{
		id: 'session',
		page: <Session />,
		name: 'Session',
		path: '/session/:id',
	},
];
