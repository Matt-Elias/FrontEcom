import { heroui } from '@heroui/react'

export default heroui({
    themes: {
        light: {
            colors: {
                default: {
                    50: '#ffffff',
                    100: '#f5f5f5',
                    200: '#e8e8e8',
                    300: '#dedede',
                    400: '#d4d4d4',
                    500: '#c9c9c9',
                    600: '#bfbfbf',
                    700: '#b5b5b5',
                    800: '#a8a8a8',
                    900: '#9e9e9e',
                    foreground: '#000',
                    DEFAULT: '#ffffff',
                },
                primary: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316', // Tailwind orange-500
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                    foreground: '#fff',
                    DEFAULT: '#f97316',
                },

                secondary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e', // Tailwind green-500
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    foreground: '#fff',
                    DEFAULT: '#22c55e',
                },

                background: '#ffffff',
                foreground: '#000000',

                content1: { DEFAULT: '#ffffff', foreground: '#000' },
                content2: { DEFAULT: '#f5f5f5', foreground: '#000' },
                content3: { DEFAULT: '#e8e8e8', foreground: '#000' },
                content4: { DEFAULT: '#dedede', foreground: '#000' },

                overlay: '#000000',
                focus: 'transparent',
            },
        },

        dark: {
            colors: {
                default: {
                    50: '#1b1b1b',
                    100: '#252525',
                    200: '#303030',
                    300: '#3a3a3a',
                    400: '#454545',
                    500: '#505050',
                    600: '#5a5a5a',
                    700: '#656565',
                    800: '#707070',
                    900: '#7a7a7a',
                    foreground: '#fff',
                    DEFAULT: '#1b1b1b',
                },
                primary: {
    50:  '#7c2d12',   // antes 900
    100: '#9a3412',   // antes 800
    200: '#c2410c',   // antes 700
    300: '#ea580c',   // antes 600
    400: '#f97316',   // antes 500
    500: '#fb923c',   // antes 400
    600: '#fdba74',   // antes 300
    700: '#fed7aa',   // antes 200
    800: '#ffedd5',   // antes 100
    900: '#fff7ed',   // antes 50
    foreground: '#fff',
    DEFAULT: '#f97316',
},
secondary: {
    50:  '#14532d',   // antes 900
    100: '#166534',   // antes 800
    200: '#15803d',   // antes 700
    300: '#16a34a',   // antes 600
    400: '#22c55e',   // antes 500
    500: '#4ade80',   // antes 400
    600: '#86efac',   // antes 300
    700: '#bbf7d0',   // antes 200
    800: '#dcfce7',   // antes 100
    900: '#f0fdf4',   // antes 50
    foreground: '#fff',
    DEFAULT: '#22c55e',
},


                background: '#1b1b1b',
                foreground: '#ffffff',

                content1: { DEFAULT: '#252525', foreground: '#fff' },
                content2: { DEFAULT: '#303030', foreground: '#fff' },
                content3: { DEFAULT: '#3a3a3a', foreground: '#fff' },
                content4: { DEFAULT: '#454545', foreground: '#fff' },

                overlay: '#ffffff',
                focus: 'transparent',
            },
        },
    },
    layout: {
        disabledOpacity: '0.4',
        fontSize: {
            small: '1rem',
        },
        lineHeight: {
            small: '1.50rem',
        },
    },
})
