import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig(({ mode }) => {
    const { APP_URL } = loadEnv(mode, process.cwd(), 'APP_');

    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.js'],
                refresh: true,
                detectTls: new URL(APP_URL).hostname,
            }),
        ],
    };
});
