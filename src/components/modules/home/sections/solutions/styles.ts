import { css } from "@styled-system/css";

export const solutionsCss = css({
  pt: "clamp(token(spacing.24), 5.471830985915493rem + 2.253521126760563vw, 7.5rem)",
  pb: "clamp(token(spacing.5), 0.8098591549295775rem + 1.8779342723004695vw, token(spacing.10))",

  "& .solutions": {
    "&__text": {
      display: "flex",
      mb: 10,
      flexDirection: "column",

      lg: {
        flexDirection: "row",
      },

      "& h2": {
        flex: 1,
        fontWeight: "bold",
        fontSize:
          "clamp(token(fontSizes.2xl), 1.2359154929577465rem + 1.1267605633802815vw, token(fontSizes.4xl))",

        mb: "5",

        lg: {
          mb: "0",
          mr: "clamp(token(spacing.40), 5.384615384615384rem + 7.211538461538463vw, 11.875rem)",
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

    "&__list": {
      overflowX: "auto",
      display: "flex",
      columnGap: "6",
    },
  },
});
