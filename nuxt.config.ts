import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/icon',
        '@vueuse/nuxt',
        'shadcn-nuxt',
        'nuxt-og-image',
        'nuxt-shiki',
    ],

    components: [
        { path: '~/components', ignore: ['_internal/*', '_internal/**/*', 'examples/*', 'examples/**/*'] },
        { path: '~/components/content', global: true, pathPrefix: false },
    ],

    devtools: {
        enabled: true,
    },

    css: [
        '~/assets/css/main.css',
    ],

    content: {
        build: {
            markdown: {
                highlight: false,
            },
        },
        database: {
            type: 'd1',
            bindingName: 'DB',
        },
        // required to prevent error related to better-sqlite3 during build and deploy
        experimental: {
            sqliteConnector: 'native',
        },
    },

    compatibilityDate: '2025-11-25',

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    eslint: {
        config: {
            stylistic: {
                indent: 4, // 4, or 'tab'
                quotes: 'single', // or 'double'
            },
        },
    },

    shadcn: {
        prefix: '',
        componentDir: './app/components/ui',
    },

    shiki: {
        defaultTheme: {
            light: 'github-light-default',
            dark: 'github-dark',
        },
        bundledLangs: [
            'ts',
            'tsx',
            'js',
            'vue',
            'html',
            'json',
            'bash',
            'astro',
            'toml',
        ],
    },
})
