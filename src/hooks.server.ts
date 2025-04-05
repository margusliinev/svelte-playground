import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { httpLogger } from '$lib/server/logger';
import { randomUUID } from 'crypto';

export const logging = (async ({ event, resolve }) => {
    const start = performance.now();
    const requestId = randomUUID();
    const method = event.request.method;
    const path = event.url.pathname;

    const response = await resolve(event);

    const end = performance.now();
    const duration = (end - start).toFixed(3);
    const status = response.status;

    const logData = {
        requestId,
        method,
        path,
        status,
        duration,
    };

    httpLogger.info({ msg: `${method} ${path} - ${status} (${duration}ms)`, ...logData });

    return response;
}) satisfies Handle;

export const handle = sequence(logging);
