import { Colors } from "./types";

export const baseColors = {
  failure: "#4b4eed",
  primary: "#c7d31f",
  primaryBright: "#e8537b",
  primaryDark: "#0da000",
  secondary: "#d89145",
  success: "#324cd1",
  warning: "#ff3838",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#f8fcde",
  backgroundDisabled: "#e8eae8",
  backgroundAlt: "#FFFFFF",
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  cardBorder: "#eae9e3",
  contrast: "#261813",
  dropdown: "#e8e7e1",
  dropdownDeep: "#ededed",
  invertedContrast: "#FFFFFF",
  input: "#f4f0eb",
  inputSecondary: "#e2edcb",
  tertiary: "#f1f4ef",
  text: "#5e240d",
  textDisabled: "#bcc4bd",
  textSubtle: "#aa6f8d",
  disabled: "#eaeae8",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fff7e5 0%, #f0ffef 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #f0ffef 0%, #fff7e5 100%)",
    cardHeader: "linear-gradient(111.68deg, #eff2ed 0%, #ebe6f4 100%)",
    blue: "linear-gradient(180deg, #a7f2c0 0%, #bcf293 100%)",
    violet: "linear-gradient(180deg, #c7cdf9 0%, #b8c9f9 100%)",
    violetAlt: "linear-gradient(180deg, #dacbef 0%, #d19ab9 100%)",
    gold: "linear-gradient(180deg, #ff0000 0%, #fc9032 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#ffd26b",
  background: "#090a05",
  backgroundDisabled: "#423d37",
  backgroundAlt: "#2b2725",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "#343f31",
  contrast: "#FFFFFF",
  dropdown: "#1e211e",
  dropdownDeep: "#16100b",
  invertedContrast: "#262413",
  input: "#31472f",
  inputSecondary: "#213028",
  primaryDark: "#a03800",
  tertiary: "#473541",
  text: "#fcffed",
  textDisabled: "#6c7060",
  textSubtle: "#bdd1ab",
  disabled: "#54634b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #305b39 0%, #2a5436 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #2a5436 0%, #305b39 100%)",
    cardHeader: "linear-gradient(166.77deg, #2a3c54 0%, #30443e 100%)",
    blue: "linear-gradient(180deg, #007f3d 0%, #198c7e 100%)",
    violet: "linear-gradient(180deg, #996549 0%, #b24c58 100%)",
    violetAlt: "linear-gradient(180deg, #755442 0%, #8c7e56 100%)",
    gold: "linear-gradient(180deg, #ff0000 0%, #fc7232 100%)",
  },
};
