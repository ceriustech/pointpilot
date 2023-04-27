import { client } from '../../client';

export default function getSanityData(data, setState) {
	const query = `[_type == ${data}]`;

	try {
		client.fetch(query).then((data) => {
			const sanityData = data;
			return setState(sanityData);
		});
	} catch (err) {
		console.error(err);
		return [];
	}
}
