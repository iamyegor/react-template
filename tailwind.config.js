import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
    	extend: {
    		fontFamily: {
    			sans: ["Inter", ...defaultTheme.fontFamily.sans]
    		},
    		screens: {
    			xs: '420px',
    			sm: '640px',
    			md: '768px',
    			lg: '1024px',
    			xl: '1280px'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {}
    	},
    	container: {
    		center: 'true',
    		padding: '20px',
            screens: {
                sm: "1100px",
                md: "1100px",
                lg: "1100px",
                xl: "1100px",
            },
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
