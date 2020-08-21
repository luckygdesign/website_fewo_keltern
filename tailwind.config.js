module.exports = {
  purge: ["./pages/**/*.tsx"],
  theme: {
    typography: (theme) => ({
      extends: {
        css: {
          a: {
            color: theme("colors.yellow.800"),
            "&:hover": {
              color: theme("colors.yellow.700"),
            },
          },
        },
      },
    }),
  },
  plugins: [require("@tailwindcss/ui"), require("tailwindcss-multi-column")()],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
