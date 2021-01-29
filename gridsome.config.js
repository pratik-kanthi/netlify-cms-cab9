// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');
// const purgecss = require('@fullhuman/postcss-purgecss');

const postcssPlugins = [tailwind(), autoprefixer()]; // ADDED `autoprefixer()` to postcssPlugins array

// if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss());

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [path.resolve(__dirname, './src/assets/scss/_variables.scss')],
        });
}

module.exports = {
    siteName: 'Cab9',
    icon: {
        touchicon: './src/assets/images/touch-logo.png',
    },
    transformers: {
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icoallGhostPostn icon-link',
            plugins: [
                // ...global plugins
            ],
        },
    },
    settings: {
        // Place site-wide settings here and query them from the GraphQL layer's metadata {settings} key.
        likes: {
            language: 'JavaScript',
            frameworks: ['Vue', 'Gridsome', 'Tailwind'],
        },
    },
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'blog/**/*.md',
                typeName: 'Blog',
                remark: {
                    plugins: [
                        // ...local plugins
                    ],
                },
            },
        },
        {
            use: 'gridsome-plugin-netlify-cms',
            options: {
                publicPath: '/admin',
            },
        },
        {
            use: 'gridsome-plugin-pwa',
            options: {
                // Service Worker Options
                disableServiceWorker: false,
                serviceWorkerPath: 'service-worker.js',
                cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
                disableTemplatedUrls: false, // Optional

                // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
                manifestPath: 'manifest.json',
                title: 'Cab9',
                startUrl: '/',
                display: 'standalone',
                statusBarStyle: 'default',
                themeColor: '#D80000',
                backgroundColor: '#ffffff',
                icon: 'src/assets/images/touch-logo.png',
                shortName: 'Cab9', // Optional
                description: 'Cab9 is a powerful dispatch system with a fully featured driver and passenger apps that seamlessly integrate with your workflow. Configure the system to suit your business needs and let Cab9 take care of the rest.', // Optional
            },
        }
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
    chainWebpack(config) {
        config.mode('development');
        // Load variables for all vue-files
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

        types.forEach((type) => {
            addStyleResource(config.module.rule('sass').oneOf(type));
        });

        // or if you use scss
        types.forEach((type) => {
            addStyleResource(config.module.rule('scss').oneOf(type));
        });
    },
};
