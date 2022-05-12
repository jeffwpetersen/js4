module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
            },
        },
        screens: {
            'sm': '1024px',
            // => @media (min-width: 240px) { ... }

            'md': '1024px',
            // => @media (min-width: 268px) { ... }

            'lg': '1280px',
            // => @media (min-width: 2024px) { ... }

            'xl': '1536px',
            // => @media (min-width: 2280px) { ... }

            '2xl': '100%',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontSize: {
                "6xl": [
                    "3.815rem",
                    "4rem"
                ],
                "5xl": [
                    "3.815rem",
                    "6rem"
                ],
                "4xl": [
                    "3.815rem",
                    "5rem"
                ],
                "3xl": [
                    "3.052rem",
                    "4.1rem"
                ],
                "2xl": [
                    "2.441rem",
                    "4rem"
                ],
                "xl": [
                    "1.953rem",
                    "4rem"
                ],
                "lg": [
                    "1.5rem",
                    "3rem"
                ],
                "md": [
                    "1.2rem",
                    "2.11rem"
                ],
                "base": [
                    "1rem",
                    "1.58rem"
                ],
                "sm": [
                    "0.8rem",
                    ".89rem"
                ],
                "xs": [
                    "0.64rem",
                    ".8rem"
                ]
            },
            spacing: {
                "quarter": "0.375rem",
                "half": "0.75rem",
                "one": "1.5rem",
                "two": "3rem",
                "three": "4.5rem",
                "four": "6rem",
                "five": "7.5rem",
                "six": "9rem",
                "eight": "12rem",
                "twelve": "18rem",
                "sixteen": "24rem"
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'theme-color': '#427AA1',
                'theme-dark': '#05668D',
                'theme-tint': '#ebf2fa',
                'theme-comp': '#bbff00',
                'theme-comp-dark': '#679436',
                'pinks': '#FF1493',
                'black': '#1c1917'
            },
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['Helvetica', 'Oswald'],
            'body': ['Open Sans'],
            'lato': ['"Lato"'],
        }
    },
    plugins: [],
}

