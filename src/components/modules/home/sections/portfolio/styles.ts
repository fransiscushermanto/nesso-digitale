import { css } from "@styled-system/css";

export const portfolioCss = css({
  backgroundColor: "#F6F6F6",
  py: "2.625rem",

  "& .portfolio": {
    "&__text": {
      display: "flex",
      flexDirection: "column",

      lg: {
        flexDirection: "row",
        mb: 16,
      },

      "& h2": {
        flex: 2,
        fontWeight: "bold",
        fontSize:
          "clamp(token(fontSizes.2xl), 1.2359154929577465rem + 1.1267605633802815vw, token(fontSizes.4xl))",
        mb: "5",

        lg: {
          mb: 0,
          mr: "11.875rem",
        },
      },

      "& p": {
        flex: 1,
        fontSize:
          "clamp(token(fontSizes.sm), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",

        lg: {
          ml: "auto",
        },
      },
    },

    "&__showcase": {
      mt: 6,
      lg: {
        mt: 0,
        pr: "clamp(token(spacing.0), -19.692307692307693rem + 30.76923076923077vw, token(spacing.32))",
      },

      "& .slider": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        lg: {
          alignItems: "unset",
          flexDirection: "row",
        },

        "&__content": {
          order: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          rowGap:
            "clamp(token(spacing.10), 1.971830985915493rem + 2.253521126760563vw, token(spacing.16))",

          lg: {
            order: 1,
            maxW: "28.125rem",
          },

          "&__header": {
            display: "flex",
            flexDirection: "column",
            rowGap: 5,
            alignItems: "center",
            textAlign: "center",

            sm: {
              textAlign: "start",
              alignItems: "start",
            },

            "&-title": {
              fontSize:
                "clamp(token(fontSizes.xl), 1.073943661971831rem + 0.7511737089201878vw, 1.75rem)",
              fontWeight: "bold",
            },

            "&-description": {
              fontSize:
                "clamp(token(fontSizes.md), 0.9119718309859155rem + 0.3755868544600939vw, token(fontSizes.xl))",
            },
          },

          "&__footer": {
            display: "flex",
            columnGap: 12,
            alignItems: "center",
            flexDirection: "column",

            sm: {
              flexDirection: "row",
            },

            "&-tag": {
              backgroundColor: "#f1f1f1",
              borderRadius: "3xl",
              padding: "token(spacing.2) token(spacing.5)",
              fontSize:
                "clamp(token(fontSizes.xs), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",
            },

            "&-action": {
              display: "inline-flex",
              columnGap: "2",
              mt: 4,

              sm: {
                mt: 0,
                ml: "auto",
              },

              "& button": {
                w: 10,
                h: 10,
              },
            },
          },
        },

        "&__image": {
          order: 1,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",

          "& img": {
            w: "full",
            h: "full",
          },

          lg: {
            width: "24.125rem",
            height: "29.6875rem",
            order: 2,
            ml: "auto",
          },
        },
      },
    },
  },
});
