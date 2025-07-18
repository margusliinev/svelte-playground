declare global {
    namespace App {
        interface Error {
            success: boolean;
            message: string;
            errors?: Record<string, string>;
        }
        interface Locals {
            logger: import('pino').Logger;
        }
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {};
