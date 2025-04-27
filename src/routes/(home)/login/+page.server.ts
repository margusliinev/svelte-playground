import type { Actions } from './$types';
import { validate } from '$lib/server/validator';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

const schema = z.object({
    email: z.email({ error: 'Email is invalid' }).min(1, { message: 'Email is required' }),
    password: z.string({ error: 'Password is invalid' }).min(1, { message: 'Password is required' }),
});

export const actions = {
    login: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        const { data, errors } = validate(schema, { email, password });
        if (errors) {
            return fail(400, errors);
        }

        console.log('data', data);
    },
} satisfies Actions;
