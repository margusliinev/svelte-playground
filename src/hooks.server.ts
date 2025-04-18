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
    const userAgent = event.request.headers.get('user-agent') || 'unknown';
    const referer = event.request.headers.get('referer') || 'unknown';
    const requestId = randomUUID();

    event.locals.logger = logger.child({ requestId });

    const response = await resolve(event);

    const end = performance.now();
    const duration = (end - start).toFixed(3);
    const status = response.status;

    const logData = {
        method,
        path,
        userAgent,
        referer,
        requestId,
        status,
        duration,
    };

    const level = status >= 500 ? 'error' : status >= 400 ? 'warn' : 'info';

    if (env.NODE_ENV === 'development') logger[level](`${method} ${path} - ${status} (${duration}ms)`);
    if (env.NODE_ENV === 'production') logger[level](logData);

    return response;
}) satisfies Handle;

export const handle = sequence(handleLogging);
