import { env } from '$env/dynamic/private';
import pino from 'pino';

export const httpLogger = pino({
    base: null,
    level: 'info',
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: { level: (label) => ({ level: label }) },
    transport: {
        target: env.NODE_ENV === 'development' ? 'pino-pretty' : 'pino/file',
        options: env.NODE_ENV === 'development' ? { colorize: true, singleLine: true } : { destination: 1 },
    },
});
