import { css } from "@styled-system/css";

export const introductionCss = css({
  position: "relative",
  overflow: "hidden",

  display: "flex",

  padding:
    "13.25rem 0 12rem clamp(1.25rem, -0.07042253521126773rem + 5.633802816901409vw, 5rem)",

  "& .introduction": {
    "&__content": {
      width: "min(60%, 43.75rem)",
      backgroundColor: "white",

      display: "flex",
      flexDirection: "column",

      rowGap: "14",

      "&__title": {
        position: "relative",

        "& .title__bg": {
          userSelect: "none",
          pointerEvents: "none",

          "&-object": {
            position: "absolute",
            top: "clamp(0.65625rem, -0.17554797535211264rem + 3.5490046948356806vw, 3.01855625rem)",
            left: "80%",

            width:
              "clamp(18.75rem, 12.147887323943662rem + 28.169014084507044vw, 37.5rem)",
            height: "518px",

            "@media (max-width: 425px)": {
              left: "95%",
            },

            xl: {
              left: "100%",
            },

            lg: {
              left: "95%",
            },
          },

          "&-vector": {
            zIndex: "bg",
            position: "absolute",
            top: "-45.27%",
            left: "95%",
            xl: {
              top: "-36.27%",
            },
            lg: {
              top: "-40.27%",
            },

            width: "1539px",
            height: "982px",
          },
        },
        "& h1": {
          position: "relative",
          zIndex: 1,

          textTransform: "uppercase",

          fontSize: "clamp(2.25rem, 1.1717rem + 4.6009vw, 5.3125rem);",
          fontWeight: "light",
          letterSpacing: "0",
          lineHeight: "snug",

          "& b": {
            fontWeight: "extrabold",
            textWrap: "nowrap",
          },
        },

        "& hr": {
          zIndex: -1,
          my: "8",
          border: 0,
          borderTop: "1px solid #d9d9d9",
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

      "&__brand": {
        display: "flex",
        flexDirection: "column",
        rowGap: "6",

        width: "100%",
        maxWidth: "18.625rem",

        "&__logos": {
          display: "flex",
          flexWrap: "wrap",
          columnGap: "2",
          rowGap: "3",

          "&-logo": {
            width: "fit-content",

            "& img": {
              height: "9",
            },
          },
        },
      },
    },
  },
});
