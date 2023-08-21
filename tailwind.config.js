/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // galaxy fold
        xs: "280px",
        lgX: "1300px",
      },
      colors: {
        tinted_purple: "#F3F4FB",
        dark_purple: "#4834D4",
        subtitle: "#444444",
        grey: "#9B9B9B",
        input: "#ececf0",
        green: "#6AB04C",
        resend_otp_btn: "rgba(34, 176, 46, 0.08)",
        light_purple: "#686DE0",
        very_light_purple: "#F3F4FB",
        transaction_card: "rgba(243, 244, 251, 0.48)",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
