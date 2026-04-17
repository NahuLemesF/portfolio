import { useCallback, useEffect, useRef, type RefObject } from "react";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(
  element: HTMLDivElement,
  target: number,
  duration: number
) {
  const start = element.scrollTop;
  const distance = target - start;
  let startTime: number | null = null;

  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    element.scrollTop = start + distance * easeInOutCubic(progress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

export function useScrollSnap(scrollContainerRef: RefObject<HTMLDivElement | null>) {
  const isScrolling = useRef(false);
  const snapTargets = useRef<number[]>([]);

  const updateSnapTargets = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const children = container.querySelectorAll<HTMLDivElement>("[data-snap]");
    snapTargets.current = Array.from(children).map((element) => element.offsetTop);
  }, [scrollContainerRef]);

  useEffect(() => {
    updateSnapTargets();
    window.addEventListener("resize", updateSnapTargets);
    return () => window.removeEventListener("resize", updateSnapTargets);
  }, [updateSnapTargets]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (isScrolling.current) return;

      updateSnapTargets();
      const targets = snapTargets.current;
      if (targets.length === 0) return;

      const currentScroll = container.scrollTop;
      const direction = event.deltaY > 0 ? 1 : -1;

      let currentIndex = 0;
      for (let i = 0; i < targets.length; i += 1) {
        if (currentScroll >= targets[i] - 50) {
          currentIndex = i;
        }
      }

      const nextIndex = Math.max(
        0,
        Math.min(currentIndex + direction, targets.length - 1)
      );

      if (nextIndex === currentIndex) return;

      isScrolling.current = true;
      container.style.scrollSnapType = "none";

      smoothScrollTo(container, targets[nextIndex], 900);

      window.setTimeout(() => {
        container.style.scrollSnapType = "y mandatory";
        isScrolling.current = false;
      }, 950);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [scrollContainerRef, updateSnapTargets]);
}
