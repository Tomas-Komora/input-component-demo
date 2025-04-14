// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // adjust as needed
  theme: {
    extend: {
      fontFamily: {
        onair: ['"On Air Var"', "sans-serif"],
      },
      fontSize: {
        "label-m": ["16px", { lineHeight: "22px", letterSpacing: "0.16px" }],
        "label-s": ["14px", { lineHeight: "17px", letterSpacing: "0.16px" }],
        "body-m": ["16px", { lineHeight: "22px", letterSpacing: "0.01px" }],
        "body-s": ["11px", { lineHeight: "19px", letterSpacing: "0.01px" }],
      },
      fontWeight: {
        "label-m": "500",
        "label-s": "550",
        "body-m": "400",
        "body-s": "400",
      },
      colors: {
        // Surface colors
        "surface-x-high": "#8C8C9A",
        "surface-x-low": "#FFFFFF",
        "surface-brand": "#0050FF",
        "surface-danger": "#DC2828",
        "surface-danger-variant": "#FFCDCD",
        "surface-warning": "#A56315",
        "surface-warning-variant": "#FAF1B6",

        // Content colors
        "on-neutral-xx-high": "#2C2C31",
        "on-neutral-x-high": "#595961",
        "on-neutral-medium": "#8C8C9A",
        "on-neutral-low": "#C9C9CE",
        "on-danger": "#DC2828",
        "on-warning": "#A56315",

        // State colors
        "state-hover": "rgba(26, 26, 26, 0.06)", // #1A1A1A0F
        "state-focus": "rgba(26, 26, 26, 0.8)", // #1A1A1ACC

        // Spinner colors
        "state-loading-spinner-brand-0": "#0050FF", // 100%
        "state-loading-spinner-brand-100": "#0050FF00", // 0%
      },
      spacing: {
        "dimension/3xs": "2px",
        "dimension/2xs": "4px",
        "dimension/xs": "8px",
        "dimension/s": "12px",
        "dimension/m": "16px",
        "dimension/l": "20px",
        "dimension/3xl": "32px",
        "dimension/5xl": "48px",
      },
      borderRadius: {
        "dimension/radius/input": "12px",
      },
      borderWidth: {
        "dimension/stroke/l": "1px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        ".font-label-m": {
          fontFamily: theme("fontFamily.onair"),
          fontSize: theme("fontSize.label-m")[0],
          lineHeight: theme("fontSize.label-m")[1].lineHeight,
          letterSpacing: theme("fontSize.label-m")[1].letterSpacing,
          fontWeight: theme("fontWeight.label-m"),
        },
        ".font-label-s": {
          fontFamily: theme("fontFamily.onair"),
          fontSize: theme("fontSize.label-s")[0],
          lineHeight: theme("fontSize.label-s")[1].lineHeight,
          letterSpacing: theme("fontSize.label-s")[1].letterSpacing,
          fontWeight: theme("fontWeight.label-s"),
        },
        ".font-body-m": {
          fontFamily: theme("fontFamily.onair"),
          fontSize: theme("fontSize.body-m")[0],
          lineHeight: theme("fontSize.body-m")[1].lineHeight,
          letterSpacing: theme("fontSize.body-m")[1].letterSpacing,
          fontWeight: theme("fontWeight.body-m"),
        },
        ".font-body-s": {
          fontFamily: theme("fontFamily.onair"),
          fontSize: theme("fontSize.body-s")[0],
          lineHeight: theme("fontSize.body-s")[1].lineHeight,
          letterSpacing: theme("fontSize.body-s")[1].letterSpacing,
          fontWeight: theme("fontWeight.body-s"),
        },
      });
    }),
  ],
};
