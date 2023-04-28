import { createClient } from '@sanity/client';
import { SANITY_PROJECT_ID } from './clientVariables';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2023-04-04',
	useCdn: true,
	token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
