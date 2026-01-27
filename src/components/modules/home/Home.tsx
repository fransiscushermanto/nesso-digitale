import { cx } from "@styled-system/css";

import {
  SectionAboutUs,
  SectionConsult,
  SectionIntroduction,
  SectionPortfolio,
  SectionResults,
  SectionServices,
  SectionSolutions,
} from "./sections";

import { homeCss } from "./styles";

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
