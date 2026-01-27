import { useEffect, useState, type RefObject } from "react";

interface UseWatchMouseActionOptions {
  containerRef: RefObject<HTMLDivElement | null>;
}

export function useWatchMouseAction(options: UseWatchMouseActionOptions) {
  const { containerRef } = options;

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    function onMouseEnter() {
      setIsHovered(true);
    }
    containerRef.current.addEventListener("mouseenter", onMouseEnter);

    function onMouseLeave() {
      setIsHovered(false);
    }
    containerRef.current.addEventListener("mouseleave", onMouseLeave);
  }, [containerRef]);

  return { isHovered };
}
