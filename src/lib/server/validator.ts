import { BadRequestException } from './errors';
import { z } from 'zod';

export const validate = <T>(schema: z.ZodType<T>, data: unknown): T => {
    const result = schema.safeParse(data);
    if (!result.success) {
        const errors = result.error.issues.reduce(
            (acc, issue) => {
                const key = issue.path[0] as keyof T;
                const message = issue.message;
                if (key && !acc[key]) acc[key] = message;
                return acc;
            },
            {} as Record<keyof T, string>,
        );

        throw BadRequestException(errors);
    }
    return result.data;
};
