import { css } from "@styled-system/css";

export const aboutUsCss = css({
  backgroundColor: "#F6F6F6",
  py: "2.625rem",

  "& h2": {
    mb: "8",

    fontWeight: "bold",
    fontSize:
      "clamp(token(fontSizes.2xl), 1.2359154929577465rem + 1.1267605633802815vw, token(fontSizes.4xl))",
  },

  "& .about-us": {
    "&__content": {
      display: "flex",
      flexDirection: "column",
      rowGap: "9",
      lg: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: "9",
      },

      "&-left": {
        flex: "1",
      },

      "&-right": {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        rowGap: "5",

        "& li": {
          display: "flex",
          flexDirection: "column",
          rowGap: "2",

          "& h3": {
            transition: "color 0.2s ease",

            _hover: {
              color: "primary",
            },

            fontWeight: "semibold",
            fontSize:
              "clamp(token(fontSizes.lg), 0.9929577464788732rem + 0.5633802816901408vw, token(fontSizes.2xl))",
          },

          "& p": {
            fontSize:
              "clamp(token(fontSizes.xs), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",
          },
        },
      },
    },
  },
});
