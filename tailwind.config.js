module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                nav: '880px',
                navCeb: '1000px',
                navFil: '1250px',
                navEs: '1050px',
                navJp: '920px',
                navPt: '980px',
                home: '1200px',
                about: '1015px',
                skill: '1105px',
                'skill-sm': '448px',
                'project-xl': '1400px',
                'max-screen': '1920px',
                contactMinHeight: { raw: '(max-height: 844px)' },
                projectMaxHeight: { raw: '(min-height: 760px)' },
                projectsCustomBP: {
                    raw: '(max-height: 701px) and (min-width:1400px)',
                },
                commonMaxHeight: { raw: '(max-height: 500px)' },
                skillsMaxHeight: {
                    raw: '(min-height: 1081px) and (min-width: 1051px)',
                },
                skillsMd: { raw: '(max-height: 879px)' },
                desktopMaxHeight: { raw: '(min-height: 1080px)' },
                aboutMaxHeight: { raw: '(max-height: 700px)' },
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
                'bg-light': "url('/src/assets/images/bg-light.webp')",
                'bg-dark': "url('/src/assets/images/bg-dark.webp')",
                'bg-image': "url('/src/assets/images/blob.svg')",
            },
            maxWidth: {
                maxScreen: '95rem',
                maxDesktop: '120rem',
            },
            height: {
                maxDesktop: '67.5rem',
            },
        },
    },
    plugins: [],
};
