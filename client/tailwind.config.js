module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/index.html}"],
  theme: {
    extend: {
      colors: {
        nord: {
          0: "var(--nord-0)",
          1: "var(--nord-1)",
          2: "var(--nord-2)",
          3: "var(--nord-3)",
          4: "var(--nord-4)",
          5: "var(--nord-5)",
          6: "var(--nord-6)",
          7: "var(--nord-7)",
          8: "var(--nord-8)",
          9: "var(--nord-9)",
          10: "var(--nord-10)",
          11: "var(--nord-11)",
          12: "var(--nord-12)",
          13: "var(--nord-13)",
          14: "var(--nord-14)",
          15: "var(--nord-15)",
        },
        polar: {
          1: "var(--nord-0)",
          2: "var(--nord-1)",
          3: "var(--nord-2)",
          4: "var(--nord-3)",
        },
        snow: {
          1: "var(--nord-4)",
          2: "var(--nord-5)",
          3: "var(--nord-6)",
        },
        frost: {
          1: "var(--nord-7)",
          2: "var(--nord-8)",
          3: "var(--nord-9)",
          4: "var(--nord-10)",
        },
        aurora: {
          1: "var(--nord-11)",
          2: "var(--nord-12)",
          3: "var(--nord-13)",
          4: "var(--nord-14)",
          5: "var(--nord-15)",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
  safelist: ["bg-black"],
};
