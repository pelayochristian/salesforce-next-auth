/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './node_modules/flowbite-react/**/*.js',
        './src/pages/**/*.{ts,tsx}',
        './src/common/**/*.{ts,tsx}',
        './public/**/*.html',
    ],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            keyframes: {
                indeterminateAnimation: {
                    '0%': {
                        transform: 'translateX(0) scaleX(0)',
                    },
                    '40%': {
                        transform: 'translateX(0) scaleX(0.4)',
                    },
                    '100%': {
                        transform: 'translateX(100%) scaleX(0.5)',
                    },
                },
            },
            animation: {
                'indeterminate-loading':
                    'indeterminateAnimation 1s infinite linear',
            },
            transformOrigin: {
                'left-right': '0% 50%',
            },
        },
    },
    variants: {},
    plugins: [require('flowbite/plugin')],
};
