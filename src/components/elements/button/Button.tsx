import Link from "next/link";

import { cx } from "@styled-system/css";

import type { ButtonProps, DefaultButtonProps, LinkButtonProps } from "./types";
import { buttonCss } from "./styles";

const Button = (props: ButtonProps) => {
  const {
    variant = "default",
    type = "button",
    className,
    ...restProps
  } = props;

  switch (type) {
    case "link":
      return (
        <Link
          className={cx(buttonCss, className)}
          data-variant={variant}
          {...(restProps as LinkButtonProps)}
        />
      );

    default:
      const { icon, ...restButtonProps } = restProps as DefaultButtonProps;

      return (
        <button
          type={type}
          className={cx(buttonCss, className)}
          data-variant={variant}
          data-mode-icon={icon}
          {...restButtonProps}
        />
      );
  }
};

export default Button;
