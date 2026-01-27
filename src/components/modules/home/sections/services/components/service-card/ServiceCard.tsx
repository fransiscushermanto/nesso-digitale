"use client";

import { useRef } from "react";

import { cx } from "@styled-system/css";

import { ArrowOutward } from "@/components/shapes";

import { useWatchMouseAction } from "./usecase";
import type { ServiceCardProps } from "./types";
import { serviceCardCss } from "./styles";

const ServiceCard = (props: ServiceCardProps) => {
  const { description, title } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const { isHovered } = useWatchMouseAction({ containerRef });

  return (
    <div ref={containerRef} className={cx("service-card", serviceCardCss)}>
      <div className="service-card__title">
        <h3>{title}</h3>

        {isHovered && (
          <span className="icon">
            <ArrowOutward />
          </span>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
