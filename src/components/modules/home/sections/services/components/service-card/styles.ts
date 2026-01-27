import { css } from "@styled-system/css";

export const serviceCardCss = css({
  position: "relative",

  width: "100%",
  minW: "clamp(17.8125rem, 15.171654929577464rem + 11.267605633802818vw, 25.3125rem)",

  display: "flex",
  flexDirection: "column",

  padding: "token(spacing.8) token(spacing.4) token(spacing.6)",

  backgroundColor: "#F1F1F1",
  borderRadius: "3xl",

  transition: "all 0.2s ease",

  _hover: {
    _after: {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,

      width: "full",
      height: "full",
      borderRadius: "3xl",

      border: "1px solid token(colors.primary)",
    },
  },

  "& .service-card": {
    "&__title": {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      mb: 5,

      "& h3": {
        px: "5",
        mr: "14",
        fontWeight: "semibold",
        fontSize:
          "clamp(token(fontSizes.lg), 0.9929577464788732rem + 0.5633802816901408vw, token(fontSizes.2xl))",
      },

      "& .icon": {
        position: "absolute",
        right: 0,
        top: "-30%",

        display: "flex",

        "& svg": {
          fill: "primary",
          w: "14",
          h: "14",
        },
      },
    },
  },

  "& p": {
    padding: "6",
    borderRadius: "3xl",
    backgroundColor: "white",
    height: "full",

    fontSize:
      "clamp(token(fontSizes.md), 0.9119718309859155rem + 0.3755868544600939vw, token(fontSizes.xl))",
  },
});
