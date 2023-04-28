import { client } from '../../client';

export default async function getSanityData(data) {
	const query = `*[_type == "${data}"]`;

	try {
		const sanityData = await client.fetch(query);
		return sanityData;
	} catch (err) {
		console.error(err);
		return [];
	}
}
