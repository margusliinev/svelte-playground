import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const RequestLogger = (async ({ event, resolve }) => {
    console.log(`Method: ${event.request.method} Route: ${event.route.id}`);
    return await resolve(event);
}) satisfies Handle;

export const handle = sequence(RequestLogger);
