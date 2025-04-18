import type { HandleServerError } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { logger } from '$lib/server/logger';
import { env } from '$env/dynamic/private';
import { randomUUID } from 'crypto';

export const handleError: HandleServerError = async ({ event, error, message }) => {
    event.locals.logger.error(error, message);

    return {
        success: false,
        message: 'Internal Server Error',
    };
};

export const handleLogging = (async ({ event, resolve }) => {
    const start = performance.now();
    const method = event.request.method;
    const path = event.url.pathname;
    const requestId = randomUUID();

    event.locals.logger = logger.child({ requestId: env.NODE_ENV === 'production' ? requestId : undefined });

    const response = await resolve(event);

    const end = performance.now();
    const duration = (end - start).toFixed(3);
    const status = response.status;

    const logData = {
        method,
        path,
        status,
        duration,
    };

    const level = status >= 500 ? 'error' : status >= 400 ? 'warn' : 'info';
    const message = env.NODE_ENV === 'production' ? logData : `${method} ${path} - ${status} (${duration}ms)`;

    event.locals.logger[level](message);

    return response;
}) satisfies Handle;

export const handle = sequence(handleLogging);
