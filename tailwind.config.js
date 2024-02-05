/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    darkMode: 'class', // Enable dark mode based on class
    theme: {
        extend: {
            colors: {
                dark: {
                    'primary': 'var(--color-primary-dark)',
                    'secondary': 'var(--color-secondary-dark)',
                    // Define other dark mode colors here...
                },
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['dark'], // Enable dark mode variant for background color
            textColor: ['dark'], // Enable dark mode variant for text color
        },
    },
}

