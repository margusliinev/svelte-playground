import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const themeHook = (async ({ event, resolve }) => {
    let theme = event.cookies.get('theme');

    if (theme !== 'dark' && theme !== 'light') {
        theme = 'light';
    }

    return await resolve(event, {
        transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`),
    });
}) satisfies Handle;

export const handle = sequence(themeHook);
