import { fail, redirect } from '@sveltejs/kit';
export const actions = {
	register: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');
		const email = formData.get('email');
		const response = await fetch('http://localhost:8080/register', {
			method: 'POST',
			body: JSON.stringify({ username, password, email })
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
			return fail(400, { error: message.error });
		}
	}
};
