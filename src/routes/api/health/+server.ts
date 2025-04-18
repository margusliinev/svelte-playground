import type { RequestHandler } from '@sveltejs/kit';
import { validate } from '$lib/server/validator';
import { json } from '@sveltejs/kit';
import { z } from 'zod';

const schema = z.object({
    name: z.string({ error: 'Name is required' }),
    email: z.email({ error: 'Email is required' }),
});

export const GET: RequestHandler = async () => {
    return json({ success: true, message: 'OK' });
};

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json();
    const data = validate(schema, body);

    return json({ success: true, data: data });
};
