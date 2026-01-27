import { SectionContainer, UnderlinedText } from "../../components";
import { SolutionCard } from "./components";
import { SOLUTIONS } from "./constants";
import { solutionsCss } from "./styles";

const Solutions = () => {
  return (
    <SectionContainer name="solutions" className={solutionsCss}>
      <div className="solutions__text">
        <h2>
          <UnderlinedText>La trasformazione</UnderlinedText>
          digitale, passo dopo passo
        </h2>
        <p>
          Esempi pratici di automazione che semplificano le attività operative e
          migliorano le performance aziendali.
        </p>
      </div>
      <ul className="solutions__list">
        {SOLUTIONS.map(({ description, src, title }, i) => (
          <li key={i}>
            <SolutionCard src={src} title={title} description={description} />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default Solutions;
