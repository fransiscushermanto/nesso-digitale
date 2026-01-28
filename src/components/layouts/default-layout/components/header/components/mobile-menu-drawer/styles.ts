import { css } from "@styled-system/css";

export const mobileMenuDrawerCss = css({
  position: "fixed",
  top: "-2.0625rem",
  left: "0",
  w: "full",
  h: "100dvh",

  backgroundColor: "white",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "& .close-btn": {
    top: "2.0625rem",
    right: "clamp(1rem, 6.00939vw - .408451rem, 5rem)",

    position: "absolute",
    w: 10,
    h: 10,

    borderColor: "primary",
    fill: "primary",
    stroke: "primary",

    _hover: {
      backgroundColor: "primary",
      fill: "white",
      stroke: "white",
    },
  },

  "& .menu-list": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "3",

    mb: 4,
  },

  "& .contact-btn": {
    display: "flex",
    color: "primary",
    borderColor: "primary",
    fontSize:
      "clamp(token(fontSizes.xs), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",

    padding:
      "clamp(token(spacing.1), 0.11795774647887325rem + 0.5633802816901408vw, 0.625rem) clamp(token(spacing.6), 1.1919014084507042rem + 1.3145539906103285vw, 2.375rem)",

    _hover: {
      color: "white",
      backgroundColor: "primary",
    },
  },
});
