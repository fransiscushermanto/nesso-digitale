import { css } from "@styled-system/css";

export const resultsCss = css({
  pt: "clamp(6.25rem, 4.159330985915493rem + 8.92018779342723vw, 12.1875rem)",
  pb: "clamp(4rem, 2.943661971830986rem + 4.507042253521126vw, 7rem)",

  "& .results": {
    "&__text": {
      mb: "clamp(token(spacing.12), 2.647887323943662rem + 1.5023474178403755vw, token(spacing.16))",
      display: "flex",
      flexDirection: "column",

      lg: {
        flexDirection: "row",
      },

      "& h2": {
        fontSize:
          "clamp(token(fontSizes.2xl), 1.2359154929577465rem + 1.1267605633802815vw, token(fontSizes.4xl))",
        fontWeight: "bold",
        mb: "5",

        lg: {
          mb: "0",
          mr: "11.875rem",
        },
      },

      "& p": {
        maxW: "25.5rem",
        fontSize:
          "clamp(token(fontSizes.sm), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",

        lg: {
          ml: "auto",
        },
      },
    },

    "&__content": {
      display: "flex",
      flexDirection: "column",

      rowGap:
        "clamp(token(spacing.14), 1.0384615384615383rem + 3.8461538461538463vw, 4.5rem)",

      lg: {
        flexDirection: "row",
        alignItems: "center",
        columnGap:
          "clamp(token(spacing.14), 1.0384615384615383rem + 3.8461538461538463vw, 4.5rem)",
      },

      "&__left li, &__right": {
        maxW: "20.75rem",
      },

      "&__left": {
        display: "flex",
        flexDirection: "column",
        rowGap:
          "clamp(token(spacing.14), 1.0384615384615383rem + 3.8461538461538463vw, 4.5rem)",
      },

      "& h3": {
        fontSize:
          "clamp(token(fontSizes.md),  0.9119718309859155rem + 0.3755868544600939vw, token(fontSizes.xl))",
        fontWeight: "bold",
        mb: 3,
      },

      "& p": {
        color: "#8e8e8e",
        fontSize:
          "clamp(0.625rem, 0.49295774647887325rem + 0.5633802816901408vw, token(fontSizes.md))",
      },
    },
  },
});
