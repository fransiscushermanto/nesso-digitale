import type { LinkProps } from "next/link";

export interface BaseButtonProps
  extends React.PropsWithChildren,
    Omit<React.ComponentPropsWithRef<"button">, "type"> {
  variant?: "outline" | "default";
}

export interface DefaultButtonProps extends BaseButtonProps {
  type?: React.ComponentPropsWithRef<"button">["type"];
  icon?: boolean;
}

export interface LinkButtonProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    Pick<BaseButtonProps, "variant"> {
  type?: "link";
}

export type ButtonProps = DefaultButtonProps | LinkButtonProps;
