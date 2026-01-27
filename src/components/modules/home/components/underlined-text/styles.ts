import { css } from "@styled-system/css";

export const underlinedTextCss = css({
  zIndex: 1,
  display: "inline-block",
  position: "relative",
  textWrap: "nowrap",

  _after: {
    content: "''",
    position: "absolute",
    left: "-2.5%",
    bottom: "15%",

    pointerEvents: "none",
    userSelect: "none",

    width:
      "clamp(8.5rem, 7.773767605633803rem + 3.0985915492957745vw, 10.5625rem)",
    height:
      "clamp(0.25rem, 0.20598591549295775rem + 0.18779342723004694vw, 0.375rem)",

    backgroundColor: "primary",
  },
});
