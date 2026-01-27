import { css } from "@styled-system/css";

export const footerCss = css({
  paddingBottom: "calc(token(spacing.10) + 2px)",

  "& .inner-footer": {
    display: "flex",
    flexDirection: "column",

    lg: {
      flexDirection: "row",
    },
    borderTop: "1px solid #d9d9d9",
    padding:
      "0 clamp(0.9375rem, 0.38732394366197187rem + 2.3474178403755865vw, token(spacing.10)) calc(token(spacing.12) + 4px)",
  },

  "& .footer": {
    "& section": {
      display: "flex",
      flexDirection: "column",
    },

    "&__profile": {
      mt: "clamp(token(spacing.9), 1.8098591549295775rem + 1.8779342723004695vw, token(spacing.14))",
      mr: "clamp(5rem, 4.44982rem + 2.34742vw, 6.5625rem)",
      maxW: "25.5rem",

      "&__motto": {
        mt: "3",
        color: "#2F3042",
        fontWeight: "light",

        fontSize:
          "clamp(token(fontSizes.sm), 0.7869718309859155rem + 0.3755868544600939vw, token(fontSizes.lg))",
      },

      "&__socials": {
        mt: "calc(token(spacing.6) + 2px)",
        display: "inline-flex",
        alignItems: "center",
        columnGap: "8",

        "& li": {
          fill: "#2F3042",
          opacity: "0.5",

          _hover: {
            opacity: "1",
          },
        },
      },
    },

    "&__menus, &__contact": {
      mt: "10",
      "& h3": {
        mb: "6",
        fontWeight: "bold",
        fontSize:
          "clamp(token(fontSizes.sm), 0.7869718309859155rem + 0.3755868544600939vw, token(fontSizes.lg))",
      },
    },

    "&__menus": {
      lg: {
        mr: "clamp(6.25rem, -2.9807692307692317rem + 14.423076923076925vw, token(spacing.40))",
      },

      "&__list": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        rowGap: "3",
        columnGap: "7",

        "& li": {
          fontSize:
            "clamp(token(fontSizes.xs), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",
          textWrap: "nowrap",
          opacity: 0.7,
          color: "#232323",
          textDecoration: "underline",
        },
      },
    },

    "&__contact": {
      "&__detail": {
        display: "flex",
        flexDirection: "column",
        rowGap: ".625rem",

        opacity: 0.7,
        color: "#232323",

        "& a": {
          fontSize:
            "clamp(token(fontSizes.xs), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",
          textDecoration: "underline",
        },

        "& address": {
          fontSize:
            "clamp(token(fontSizes.xs), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",
          maxW: "17.25rem",
          fontStyle: "normal",
        },
      },
    },
  },
});
