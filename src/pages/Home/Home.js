import React from 'react';
import Session from '../../components/Session';
import Modal from '../../components/Modal';

const Home = () => {
	return (
		<div>
			<Session />
			<Modal>Modal Active</Modal>
		</div>
	);
};

export default Home;
