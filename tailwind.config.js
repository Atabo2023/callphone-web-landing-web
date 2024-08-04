/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        lgX: "1300px",
      },
      colors: {
        tinted_purple: "#F3F4FB",
        dark_purple: "#4834D4",
        light_grey: "#9A9FBF", 
        tinted_grey: "#E9E9FD80",
        dark_grey: "#9A9FBF40",
        subtitle: "#444444",
        grey: "#9B9B9B",
        grey_white: "#E7EAEE",
        input: "#ececf0",
        green: "#6AB04C",
        primary: "#130F40",
        secondary: "#100658",
        tertiary: "#FFFFFF",
        off_white: "#9A9FBF40",
        dark_blue: "#24126A",
        norm: "#000000BF",
        resend_otp_btn: "rgba(34, 176, 46, 0.08)",
        light_purple: "#686DE0",
        very_light_purple: "#F3F4FB",
        transaction_card: "rgba(243, 244, 251, 0.48)",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },

      backgroundImage: {
        customGradient:
          "linear-gradient(107.46deg, rgba(110, 113, 254, 0.12) 0%, rgba(157, 159, 242, 0.12) 99.15%)",
      },

      // dropShadow: {
      //   "xl": "[4px 4px 14px 0px #00000033]"
      // }
    },
  },
  plugins: [],
};
