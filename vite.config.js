import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
    const { APP_URL } = loadEnv(mode, process.cwd(), "APP_");
    const appUrl = new URL(APP_URL);

    return {
        plugins: [
            laravel({
                input: ["resources/css/app.css", "resources/js/app.js"],
                refresh: true,
                detectTls: appUrl.protocol === "https:" && appUrl.hostname,
            }),
        ],
    };
});
