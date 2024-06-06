module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                nav: '840px',
                home: '1128px',
            },
            animation: {
                bounceRight: 'bounceRight 1s ease-in-out',
            },
            keyframes: {
                bounceRight: {
                    '0%, 100%': {
                        transform: 'translateX(0)',
                    },
                    '50%': {
                        transform: 'translateX(-25px)',
                    },
                    '90%': {
                        transform: 'translateX(10px)',
                    },
                    '91%': {
                        transform: 'translateX(9px)',
                    },
                    '92%': {
                        transform: 'translateX(8px)',
                    },
                    '93%': {
                        transform: 'translateX(7px)',
                    },
                    '94%': {
                        transform: 'translateX(6px)',
                    },
                    '95%': {
                        transform: 'translateX(5px)',
                    },
                    '96%': {
                        transform: 'translateX(4px)',
                    },
                    '97%': {
                        transform: 'translateX(3px)',
                    },
                    '98%': {
                        transform: 'translateX(2px)',
                    },
                    '99%': {
                        transform: 'translateX(1px)',
                    },
                },
            },
        },
    },
    plugins: [],
};