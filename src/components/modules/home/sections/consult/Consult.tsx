import { Button } from "@/components/elements";
import { ArrowOutward } from "@/components/shapes";

import { SectionContainer } from "../../components";
import { consultCss } from "./styles";

import vector from "./assets/background-vector.svg";
import Image from "next/image";

const Consult = () => {
  return (
    <SectionContainer name="consult" className={consultCss}>
      <div className="consult__card">
        <div className="consult__card__content">
          <div className="consult__card__content-bg">
            <Image src={vector} alt="" />
          </div>
          <div className="consult__card__content-text">
            <span>Attualmente disponibili per nuovi progetti</span>
            <h2>Interessato a collaborare con noi?</h2>
            <p>
              Aiutiamo aziende e team a progettare e sviluppare soluzioni
              digitali efficaci. Raccontaci il tuo progetto e scopriamo insieme
              come possiamo trasformare le tue idee in risultati concreti.
            </p>
            <Button
              type="link"
              href="/consulenza"
              variant="outline"
              className="consult-btn"
            >
              Prenota una Consulenza <ArrowOutward />
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Consult;
