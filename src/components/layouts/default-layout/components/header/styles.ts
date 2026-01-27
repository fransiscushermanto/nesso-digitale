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

    "&__menu": {
      display: "flex",
      columnGap: "3.375rem",

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

          "&[aria-current=page]": {
            color: "#232323",
          },
        },
      },
    },

    "& .contact-btn": {
      color: "primary",
      borderColor: "primary",

      padding: "calc(token(spacing.2) + 2px) calc(token(spacing.9) + 2px)",

      _hover: {
        color: "white",
        backgroundColor: "primary",
      },
    },
  },
});
