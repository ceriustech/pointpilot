import Home from '../pages/Home';
import About from '../pages/About';
import Faq from '../pages/FAQ';
import Donate from '../pages/Donate';
import Guest from '../pages/Guest';
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
		id: 'about',
		type: 'primary',
		page: <About />,
		name: 'About',
		path: '/about',
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
		id: 'guest',
		type: 'secondary',
		page: <Guest />,
		name: 'Guest',
		path: '/guest',
	},
	{
		id: 'session',
		type: 'secondary',
		page: <Session />,
		name: 'Session',
		path: '/session/:id',
	},
];
