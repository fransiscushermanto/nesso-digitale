import { cx } from "@styled-system/css";

import { underlinedTextCss } from "./styles";

const UnderlinedText = (props: React.PropsWithChildren) => {
  const { children } = props;

  return (
    <span className={cx("underlined-text", underlinedTextCss)}>{children}</span>
  );
};

export default UnderlinedText;
