import type { PageServerLoad } from './$types';

import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const sessionId = event.cookies.get('sessionId');
	if (!sessionId) {
		throw redirect(303, '/register');
	}
	const response = await fetch(`http://localhost:8080/user/${sessionId}`);
	const user = await response.json();
	return {
		user
	};
};

export const actions = {
	signout: async (event) => {
		event.cookies.set('sessionId', '', {
			path: '/'
		});
		throw redirect(303, '/login');
	}
};
