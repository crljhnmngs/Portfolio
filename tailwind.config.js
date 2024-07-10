module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                nav: '880px',
                home: '1200px',
                about: '1015px',
                skill: '944px',
                'skill-sm': '448px',
                'project-xl': '1400px',
                contactMinHeight: { raw: '(max-height: 844px)' },
                projectMaxHeight: { raw: '(max-height: 700px)' },
                projectsCustomBP: {
                    raw: '(max-height: 701px),(min-width:1400px)',
                },
            },
            animation: {
                delay: 'delay 0.8s infinite ease-in-out',
                midToTop: 'midToTop 0.8s ease-in-out',
                midToBottom: 'midToBottom 0.8s ease-in-out',
                float: 'float 6s ease-in-out infinite',
            },
            keyframes: {
                delay: {
                    '0%, 40%, 100%': { transform: 'scaleY(0.05)' },
                    '20%': { transform: 'scaleY(1.0)' },
                },
                midToTop: {
                    '0%': { bottom: '50%' },
                    '100%': { bottom: '100%' },
                },
                midToBottom: {
                    '0%': { top: '50%' },
                    '100%': { top: '100%' },
                },
                float: {
                    '0%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-20px)',
                    },
                    '100%': {
                        transform: 'translateY(0px)',
                    },
                },
            },
            backgroundImage: {
                'bg-light': "url('images/bg-light.png')",
                'bg-dark': "url('images/bg-dark.png')",
                'bg-image': "url('images/blob.svg')",
            },
            maxWidth: {
                maxScreen: '95rem',
            },
        },
    },
    plugins: [],
};
