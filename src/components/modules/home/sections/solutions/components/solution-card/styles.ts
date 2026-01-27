import { css } from "@styled-system/css";

export const solutionCardCss = css({
  w: "clamp(15.5rem, 11.934859154929578rem + 15.211267605633802vw, 25.625rem)",
  display: "flex",
  flexDirection: "column",
  rowGap: "5",

  "& .solution-card": {
    "&__content": {
      "& h3": {
        fontSize:
          "clamp(token(fontSizes.md), 0.9119718309859155rem + 0.3755868544600939vw, token(fontSizes.xl))",
        fontWeight: "bold",
        mb: 1,
      },

      "& p": {
        color: "#2f2f2f",
        fontSize:
          "clamp(token(fontSizes.md), 0.9119718309859155rem + 0.3755868544600939vw, token(fontSizes.xl))",
      },
    },
  },
});
