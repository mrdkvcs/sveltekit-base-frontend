import { redirect, fail } from '@sveltejs/kit';

export const actions = {
	login: async (event) => {
		const form = await event.request.formData();
		const email = form.get('email');
		const password = form.get('password');
		const response = await fetch('http://localhost:8080/login', {
			method: 'POST',
			body: JSON.stringify({ email, password })
		});
		if (response.ok) {
			const user = await response.json();
			event.cookies.set('sessionId', user.api_key, {
				path: '/',
				secure: true,
				httpOnly: true,
				sameSite: 'strict',
				maxAge: 3600
			});
			throw redirect(303, '/');
		} else {
			const message = await response.json();
			return fail(400, {
				error: message.error
			});
		}
	}
};
