/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "base-color": "#444",
        "base-color-light": "#666",
        "base-color-very-light": "#999",
        "primary-700": "#0987A0",
        "primary-800": "#086F83",
      },
      lineHeight: {
        1.6: 1.6,
      },
      fontSize: {
        "small-size": ".9rem",
        "normal-size": "1rem",
        "large-size": "1.25rem",
        "xlarge-size": "1.5rem",
        "2xlarge-size": "1.75rem",
      },
    },
  },
  plugins: [],
};
