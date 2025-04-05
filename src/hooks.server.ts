import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { httpLogger } from '$lib/server/logger';
import { env } from '$env/dynamic/private';
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

    const level = status >= 500 ? 'error' : status >= 400 ? 'warn' : 'info';
    if (env.ENV_ID === 'dev') httpLogger[level](`${method} ${path} - ${status} (${duration}ms)`);
    if (env.ENV_ID === 'live') httpLogger[level](logData);

    return response;
}) satisfies Handle;

export const handle = sequence(logging);
