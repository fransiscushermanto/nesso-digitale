import { css } from "@styled-system/css";

export const servicesCss = css({
  py: "clamp(5.625rem, 4.524647887323944rem + 4.694835680751173vw, 8.75rem)",

  "& .services": {
    "&__text": {
      display: "flex",
      mb: 20,
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

    "&__list": {
      overflowX: "auto",

      display: "flex",
      flexDirection: "row",
      maxW: "100%",
      columnGap: 6,

      "& li": {
        flex: 1,

        "& .service-card": {
          height: "100%",
        },
      },
    },
  },
});
