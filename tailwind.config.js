/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        container: "1290px",
        background: "var(--background)",
        foreground: "var(--foreground)",
        overViewColor: "#6BE6A8",
        box1: "#FF9A9A",
        box2: "#CFAAFF",
        box3: "#A0FCD9",
        CBox1: "#0FA958",
        CBox2: "#2E4E3E",
        CBox3: "#26DBDB",
        CBox4: "#B126DB",
      },
    },
  },
  plugins: [],
};
