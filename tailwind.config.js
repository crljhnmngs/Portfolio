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
                floating: 'floating 3s ease-in-out infinite',
                delay: 'delay 0.8s infinite ease-in-out',
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
                floating: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(15px)' },
                    '100%': { transform: 'translateY(-0px)' },
                },
                delay: {
                    '0%, 40%, 100%': { transform: 'scaleY(0.05)' },
                    '20%': { transform: 'scaleY(1.0)' },
                },
            },
            backgroundImage: {
                'bg-light': "url('images/bg-light.png')",
            },
        },
    },
    plugins: [],
};
