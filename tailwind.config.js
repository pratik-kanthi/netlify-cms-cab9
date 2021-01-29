module.exports = {
    important: true,
    purge: {
        content:[
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.jsx'
        ]
    },
    theme: {
        extend: {
            colors: {
                primary: '#D80000',
                secondary: '#1B1B1B',
                body: '#535455',
            },
            spacing: {
                72: '18rem',
                84: '21rem',
                96: '24rem',
            },
            margin: {
                '-72': '-18rem',
                '-84': '-21rem',
                '-96': '-24rem',
            },
            padding: {
                '-72': '-18rem',
                '-84': '-21rem',
                '-96': '-24rem',
            },
            screens: {
                pro: {
                    min: '1366px',
                    max: '1366px'
                },
                'pro-p': {
                    min: '1024px',
                    max: '1024px'
                },
            },
            height: {
                '10vh': '10vh',
                '20vh': '20vh',
                '30vh': '30vh',
                '40vh': '40vh',
                '50vh': '50vh',
                '60vh': '60vh',
                '70vh': '70vh',
                '80vh': '80vh',
                '90vh': '90vh'
            },
            borderRadius: {
                'xl': '1rem'
            },
            inset: {
                '-4': '-16rem',
                '-5': '-20rem',
                '-6': '-24rem',
            },
            fontSize:{
                'xxs':'0.625rem'
            },
            boxShadow:{
                lg: '0 5px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            },
        },
        fontFamily: {
            base: ['Avenir Next', 'sans-serif'],
            demi: ['Avenir Next Demi', 'sans-serif'],
        },
        container: {
            center: true,
        },
    },
    plugins: [],
};