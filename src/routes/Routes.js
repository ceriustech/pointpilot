import Home from '../pages/Home';
import Faq from '../pages/FAQ';
import Pointer from '../pages/Pointer';

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
		id: 'pointer',
		page: <Pointer />,
		name: 'Pointer',
		path: '/pointer',
	},
];
