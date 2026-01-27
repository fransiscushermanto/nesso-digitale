import { cx } from "@styled-system/css";

import type { SectionContainerProps } from "./types";

const SectionContainer = (props: SectionContainerProps) => {
  const { className, name, ...restProps } = props;

  return (
    <section
      className={cx(`section-${name}`, "container", className)}
      {...restProps}
    />
  );
};

export default SectionContainer;
