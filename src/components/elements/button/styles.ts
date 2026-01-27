import { css } from "@styled-system/css";

export const buttonCss = css({
  cursor: "pointer",

  transition: "all 0.5s ease",
  borderRadius: "4xl",
  padding: "token(spacing.3) token(spacing.4)",
  backgroundColor: "primary",
  color: "white",
  fill: "white",

  _hover: {
    backgroundColor: "blue.800",
  },

  "&[data-variant='outline']": {
    border: "1px solid #636363",
    padding: "token(spacing.3) token(spacing.4)",
    backgroundColor: "transparent",
    color: "#636363",
    fill: "#636363",
    stroke: "#636363",

    _hover: {
      borderColor: "primary",
      backgroundColor: "primary",
      color: "white",
      fill: "white",
      stroke: "white",
    },
  },

  "&[data-mode-icon='true']": {
    padding: 0,

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
