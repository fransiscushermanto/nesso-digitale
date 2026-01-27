import { SectionContainer, UnderlinedText } from "../../components";

import { ServiceCard } from "./components";
import { SERVICES } from "./constants";
import { servicesCss } from "./styles";

const Services = () => {
  return (
    <SectionContainer name="services" className={servicesCss}>
      <div className="services__text">
        <h2>
          <UnderlinedText>I nostri servizi</UnderlinedText>
        </h2>
        <p>
          Questi servizi sono progettati per aiutare i clienti a costruire e far
          crescere il proprio brand attraverso strategie creative e soluzioni
          digitali innovative.
        </p>
      </div>
      <ul className="services__list">
        {SERVICES.map(({ description, title }, i) => (
          <li key={i}>
            <ServiceCard title={title} description={description} />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default Services;
