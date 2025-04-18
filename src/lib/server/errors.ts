import { error } from '@sveltejs/kit';

const HTTP_EXCEPTIONS = {
    BAD_REQUEST: { code: 400, message: 'Bad Request' },
    UNAUTHORIZED: { code: 401, message: 'Unauthorized' },
    PAYMENT_REQUIRED: { code: 402, message: 'Payment Required' },
    FORBIDDEN: { code: 403, message: 'Forbidden' },
    NOT_FOUND: { code: 404, message: 'Not Found' },
    METHOD_NOT_ALLOWED: { code: 405, message: 'Method Not Allowed' },
    CONFLICT: { code: 409, message: 'Conflict' },
    UNPROCESSABLE_ENTITY: { code: 422, message: 'Unprocessable Entity' },
    TOO_MANY_REQUESTS: { code: 429, message: 'Too Many Requests' },
    INTERNAL_SERVER_ERROR: { code: 500, message: 'Internal Server Error' },
} as const;

type ExceptionKey = keyof typeof HTTP_EXCEPTIONS;

const createException = (type: ExceptionKey) => {
    return (errors?: Record<string, string>) => {
        const { code, message } = HTTP_EXCEPTIONS[type];
        return error(code, { success: false, message, errors });
    };
};

export const BadRequestException = createException('BAD_REQUEST');
export const UnauthorizedException = createException('UNAUTHORIZED');
export const PaymentRequiredException = createException('PAYMENT_REQUIRED');
export const ForbiddenException = createException('FORBIDDEN');
export const NotFoundException = createException('NOT_FOUND');
export const MethodNotAllowedException = createException('METHOD_NOT_ALLOWED');
export const ConflictException = createException('CONFLICT');
export const UnprocessableEntityException = createException('UNPROCESSABLE_ENTITY');
export const TooManyRequestsException = createException('TOO_MANY_REQUESTS');
export const InternalServerErrorException = createException('INTERNAL_SERVER_ERROR');
