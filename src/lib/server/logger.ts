import { env } from '$env/dynamic/private';
import pino from 'pino';

const dev = env.NODE_ENV === 'development';

export const httpLogger = pino({
    base: null,
    level: 'info',
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: { level: (label) => ({ level: label }), log: (obj) => (dev ? { msg: obj.msg } : obj) },
    transport: {
        target: dev ? 'pino-pretty' : 'pino/file',
        options: dev ? { colorize: true, singleLine: true } : { destination: 1 },
    },
});
