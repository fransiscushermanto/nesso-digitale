import Image from "next/image";

import { Button } from "@/components/elements";
import { ArrowOutward } from "@/components/shapes";

import { SectionContainer } from "../../components";
import { introductionCss } from "./styles";
import { BRANDS_LOGOS } from "./constants";

import object from "./assets/object.png";
import vector from "./assets/background-vector.svg";

const Introduction = () => {
  return (
    <SectionContainer name="introduction" className={introductionCss}>
      <div className="introduction__content">
        <div className="introduction__content__title">
          <h1>
            <b>Nesso Digitale</b> Lab
          </h1>
          <hr />
          <Button
            type="link"
            href="/consulenza"
            variant="outline"
            className="consult-btn"
          >
            Prenota una Consulenza <ArrowOutward />
          </Button>

          <div className="title__bg">
            <div className="title__bg-object">
              <Image src={object} loading="lazy" placeholder="blur" alt="" />
            </div>
            <div className="title__bg-vector">
              <Image src={vector} loading="lazy" alt="" />
            </div>
          </div>
        </div>
        <div className="introduction__content__brand">
          <p>
            <b>Brands that work with us</b>
          </p>
          <ul className="introduction__content__brand__logos">
            {BRANDS_LOGOS.map(({ src, name }) => (
              <li
                className="introduction__content__brand__logos-logo"
                key={name}
              >
                <Image src={src} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction;
