import dynamic from "next/dynamic";

import { cx } from "@styled-system/css";

import { SectionIntroduction } from "./sections";

import { homeCss } from "./styles";

const SectionAboutUs = dynamic(() => import("./sections/about-us"));
const SectionServices = dynamic(() => import("./sections/services"));
const SectionPortfolio = dynamic(() => import("./sections/portfolio"));
const SectionResults = dynamic(() => import("./sections/results"));
const SectionSolutions = dynamic(() => import("./sections/solutions"));
const SectionConsult = dynamic(() => import("./sections/consult"));

const Home = () => {
  return (
    <div className={cx("home-page", homeCss)}>
      <SectionIntroduction />
      <SectionAboutUs />
      <SectionServices />
      <SectionPortfolio />
      <SectionResults />
      <SectionSolutions />
      <SectionConsult />
    </div>
  );
};

export default Home;
