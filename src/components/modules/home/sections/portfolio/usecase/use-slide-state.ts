"use client";

import { useState } from "react";

interface UseSlideStateOptions {
  totalSlide: number;
}

export function useSlideState(options: UseSlideStateOptions) {
  const { totalSlide } = options;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function onNextSlide() {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlide);
  }

  function onPrevSlide() {
    setCurrentSlideIndex((prev) => Math.abs((prev - 1) % totalSlide));
  }

  return { currentSlideIndex, onNextSlide, onPrevSlide };
}
