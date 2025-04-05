import { env } from '$env/dynamic/private';
import pino from 'pino';

export const httpLogger = pino({
    base: null,
    level: 'info',
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: { level: (label) => ({ level: label }) },
    transport: {
        target: env.ENV_ID === 'dev' ? 'pino-pretty' : 'pino/file',
        options: env.ENV_ID === 'dev' ? { colorize: true, singleLine: true } : { destination: 1 },
    },
});
