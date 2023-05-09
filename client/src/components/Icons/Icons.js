import React, { useState, useEffect } from 'react';
import getSanityData from '../../Utility/Functions/sanityProvider';
import { urlFor } from '../../client';

const Icon = ({ handleIconSelection }) => {
	const [icons, setIcons] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await getSanityData('icons');
			setIcons(data);
		}

		fetchData();
	}, []);

	return (
		<div style={{ cursor: 'pointer' }}>
			{icons.map((icon) => (
				<img
					key={icon._id}
					src={urlFor(icon.image)}
					alt={icon.altText}
					width="40"
					height="40"
					onClick={handleIconSelection(icon)}
				/>
			))}
		</div>
	);
};

export default Icon;
