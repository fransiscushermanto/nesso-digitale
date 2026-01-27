import Image from "next/image";

import { SectionContainer, UnderlinedText } from "../../components";
import { resultsCss } from "./styles";

import illustration from "./assets/illustration.png";

const Results = () => {
  return (
    <SectionContainer name="results" className={resultsCss}>
      <div className="results__text">
        <h2>
          <UnderlinedText>La trasformazione</UnderlinedText> digitale in azione
        </h2>
        <p>
          Dai processi manuali a quelli automatizzati: esempi concreti di come
          aiutiamo i nostri clienti a semplificare il lavoro quotidiano, ridurre
          gli errori e ottenere risultati misurabili.
        </p>
      </div>
      <div className="results__content">
        <ul className="results__content__left">
          <li>
            <h3>Integrazione sito web e CRM</h3>
            <p>
              Sincronizzazione automatica dei lead e tempi di risposta ridotti
              da ore a pochi minuti.
            </p>
          </li>
          <li>
            <h3>Automazione dei report di vendita mensili</h3>
            <p>
              Tempo di reporting ridotto del 70%, con un risparmio di circa 40
              ore uomo al mese.
            </p>
          </li>
        </ul>
        <div className="results__content__center">
          <Image src={illustration} placeholder="blur" alt="" />
        </div>
        <div className="results__content__right">
          <h3>Gestionale leggero su misura</h3>
          <p>
            Processi centralizzati e attività amministrative quotidiane ridotte
            del 50%.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Results;
