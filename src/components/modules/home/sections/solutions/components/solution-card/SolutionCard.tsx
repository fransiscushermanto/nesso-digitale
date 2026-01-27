import Image from "next/image";

import { cx } from "@styled-system/css";

import type { SolutionCardProps } from "./types";
import { solutionCardCss } from "./styles";

const SolutionCard = (props: SolutionCardProps) => {
  const { description, src, title } = props;
  return (
    <div className={cx("solution-card", solutionCardCss)}>
      <div className="solution-card__image">
        <Image src={src} alt={title} />
      </div>
      <div className="solution-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
