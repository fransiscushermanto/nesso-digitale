import { css } from "@styled-system/css";

export const headerCss = css({
  position: "fixed",
  transform: "translateX(-50%)",
  top: "2.0625rem",
  left: "50%",
  zIndex: "header",

  "& .nav": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    pl: "2",

    backgroundColor: "token(hsl(0 0% 100%) / 0.6)",
    borderRadius: "3xl",

    "&__brand": {
      py: "1",
    },

    "&__menu": {
      display: "none",
      lg: {
        display: "flex",
        columnGap: "3.375rem",
      },

      padding: ".75rem 2rem",
      borderRadius: "3xl",

      backgroundColor: "#f1f1f1",

      "&-item": {
        display: "inline-flex",
        columnGap: ".375rem",

        "& .bullet": {
          display: "block",
          w: "1.5rem",
          h: "1.5rem",

          textAlign: "center",
        },

        "&__link": {
          color: "#636363",

          "_hover": {
            color: "gray.800",
          },

          "&[aria-current=page]": {
            color: "#232323",
          },
        },
      },
    },

    "& .contact-btn": {
      display: "none",
      lg: {
        display: "flex",
      },
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

    "& .mobile-menu-toggle": {
      lg: { display: "none" },

      w: 10,
      h: 10,

      borderColor: "primary",
      fill: "primary",
      stroke: "none",

      _hover: {
        fill: "white",
      },
    },
  },
});
