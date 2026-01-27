import { css } from "@styled-system/css";

export const consultCss = css({
  pt: "clamp(token(spacing.20), 3.899647887323944rem + 4.694835680751173vw, 8.125rem)",
  pb: "clamp(token(spacing.14), 2.8838028169014085rem + 2.629107981220657vw, 5.25rem)",

  "& .consult": {
    "&__card": {
      p: "clamp(token(spacing.4), 0.647887323943662rem + 1.5023474178403755vw, token(spacing.8)) clamp(token(spacing.2), 0.2359154929577465rem + 1.1267605633802815vw, token(spacing.5))",

      border: "1px solid token(colors.primary)",
      borderRadius: "4xl",

      "&__content": {
        overflow: "hidden",
        zIndex: 1,
        position: "relative",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        py: "clamp(0.625rem, -1.0475352112676055rem + 7.136150234741784vw, 5.375rem)",
        px: "clamp(1.25rem, -4.251760563380282rem + 23.474178403755868vw, 16.875rem)",

        backgroundColor: "#F2F2F2",

        borderRadius: "3xl",

        "&-bg": {
          zIndex: "bg",
          position: "absolute",
          top: "-28%",
          left: "54%",

          width: "96.75rem",
          height: "61.375rem",
        },

        "&-text": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",

          w: "full",
          maxW: "44.5rem",

          "& span": {
            fontSize:
              "clamp(token(fontSizes.xs), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",
          },

          "& h2": {
            mb: "1",
            color: "primary",
            fontSize:
              "clamp(token(fontSizes.3xl), 1.6109154929577465rem + 1.1267605633802815vw, 2.625rem)",
          },

          "& p": {
            mb: "8",
            fontSize:
              "clamp(token(fontSizes.xs), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",
            fontWeight: "light",
            color: "#3c3c43",
            opacity: "0.6",
          },

          "& .consult-btn": {
            display: "inline-flex",
            alignItems: "center",
            columnGap: "3",

            color: "black",
            fill: "primary",
            stroke: "none",
            fontWeight: "semibold",
            borderColor: "primary",

            fontSize:
              "clamp(token(fontSizes.xs), 0.6619718309859155rem + 0.3755868544600939vw, token(fontSizes.md))",

            _hover: {
              background: "primary",
              color: "white",
              fill: "white",
            },
          },
        },
      },
    },
  },
});
