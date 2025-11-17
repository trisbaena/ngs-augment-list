module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        
        brand: {
          50: "#f0f9ff",
          100: "#e0f2ff",
          500: "#22c1ee"
        },
        ngs: {
      blue: "#00c6ff",
      blue2: "#0088ff",
      gold: "#ffb300",
      red: "#ff4500",
      glow: "#d6eaff",
      space: "#0b0f19",
      space2: "#0d111c"
    }
      }
      ,
      keyframes: {
        toastIn: {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        toastOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(8px)", opacity: "0" }
        }
      },
      animation: {
        toastIn: "toastIn 160ms ease-out",
        toastOut: "toastOut 160ms ease-in"
      }
    }
  },
  plugins: []
}