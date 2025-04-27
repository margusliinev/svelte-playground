import type { Actions } from './$types';
import { validate } from '$lib/server/validator';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

const schema = z.object({
    name: z.string({ error: 'Name is invalid' }).min(1, { message: 'Name is required' }),
    email: z.email({ error: 'Email is invalid' }).min(1, { message: 'Email is required' }),
    password: z.string({ error: 'Password is invalid' }).min(1, { message: 'Password is required' }),
});

export const actions = {
    register: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        const { data, errors } = validate(schema, { name, email, password });
        if (errors) {
            return fail(400, errors);
        }

        console.log('data', data);
    },
} satisfies Actions;
