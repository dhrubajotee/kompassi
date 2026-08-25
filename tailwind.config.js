/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14201C",
        birch: "#F6F2E8",
        birchdim: "#EDE7D8",
        lake: "#3D6E85",
        lakedeep: "#274A5B",
        spruce: "#33503F",
        amber: "#E8A33D",
        ember: "#C97A3D",
        frost: "#AAB8B0",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "aurora-fade":
          "linear-gradient(180deg, #14201C 0%, #1B2C24 55%, #274A5B 100%)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(20,32,28,0.06), 0 12px 24px -12px rgba(20,32,28,0.18)",
      },
    },
  },
  plugins: [],
};
