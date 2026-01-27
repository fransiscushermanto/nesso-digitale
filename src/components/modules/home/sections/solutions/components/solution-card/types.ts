import type { StaticImageData } from "next/image";

export interface SolutionCardProps {
  src: string | StaticImageData;
  title: string;
  description: string;
}
