import Image from "next/image";

import { SectionContainer, UnderlinedText } from "../../components";
import { aboutUsCss } from "./styles";

import illustration from "./assets/illustration.png";

const AboutUs = () => {
  return (
    <SectionContainer name="about-us" className={aboutUsCss}>
      <h2>
        <UnderlinedText>Nesso Digitale</UnderlinedText>
      </h2>
      <div className="about-us__content">
        <div className="about-us__content-left">
          <Image
            src={illustration}
            width={619}
            height={316}
            placeholder="blur"
            alt=""
          />
        </div>
        <ul className="about-us__content-right">
          <li>
            <h3 className="highlighted">Due servizi, un solo partner</h3>
            <p>
              Sviluppiamo software su misura e forniamo sviluppatori e DevOps
              on-demand per rafforzare il tuo team.
            </p>
          </li>
          <li>
            <h3>Qualità da software house, flessibilità globale</h3>
            <p>
              Un approccio ibrido che unisce standard da software house e una
              rete internazionale di talenti.
            </p>
          </li>
          <li>
            <h3>Focus totale sul tuo business</h3>
            <p>
              Un referente locale e un team globale lavorano insieme per
              trasformare le esigenze in soluzioni.
            </p>
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
};

export default AboutUs;
