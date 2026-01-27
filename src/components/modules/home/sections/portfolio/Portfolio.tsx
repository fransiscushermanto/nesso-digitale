"use client";

import Image from "next/image";

import { Button } from "@/components/elements";
import { Chevron } from "@/components/shapes";

import { SectionContainer, UnderlinedText } from "../../components";
import { useSlideState } from "./usecase";
import { SLIDES } from "./constants";
import { portfolioCss } from "./styles";

const Portfolio = () => {
  const { onNextSlide, currentSlideIndex, onPrevSlide } = useSlideState({
    totalSlide: SLIDES.length,
  });

  const currentSlide = SLIDES[currentSlideIndex];

  return (
    <SectionContainer name="portfolio" className={portfolioCss}>
      <div className="portfolio__text">
        <h2>
          <UnderlinedText>Progetti digitali</UnderlinedText> di cui siamo
          orgogliosi
        </h2>
        <p>
          Piattaforma e-commerce scalabile, progettata per offrire un’esperienza
          utente fluida e pagamenti sicuri.
        </p>
      </div>
      <div className="portfolio__showcase">
        <div className="slider">
          <div className="slider__content">
            <div className="slider__content__header">
              <h3 className="slider__content__header-title">
                {currentSlide.title}
              </h3>
              <p className="slider__content__header-description">
                {currentSlide.description}
              </p>
            </div>
            <div className="slider__content__footer">
              <span className="slider__content__footer-tag">
                {currentSlide.tag}
              </span>
              <div className="slider__content__footer-action">
                <Button
                  variant="outline"
                  icon
                  className="slider__content__footer-action__prev"
                  onClick={onPrevSlide}
                  aria-label="slider-prev"
                >
                  <Chevron />
                </Button>
                <Button
                  variant="outline"
                  icon
                  className="slider__content__footer-action__next"
                  onClick={onNextSlide}
                  aria-label="slider-next"
                >
                  <Chevron rotate="180deg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="slider__image">
            <Image
              src={currentSlide.src}
              placeholder="blur"
              width={396}
              height={518}
              alt={currentSlide.title}
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Portfolio;
