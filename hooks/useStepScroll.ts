"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function useStepScroll(totalSteps: number) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const lastScrollTime = useRef(0);

  const goToStep = useCallback(
    (step: number) => {
      const clamped = Math.max(0, Math.min(totalSteps - 1, step));
      setCurrentStep(clamped);
    },
    [totalSteps]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsLocked(entry.isIntersecting && entry.intersectionRatio >= 0.8);
      },
      { threshold: 0.8 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isLocked) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 600) return;
      if (isScrollingRef.current) return;

      const delta = e.deltaY;

      if (delta > 0 && currentStep < totalSteps - 1) {
        e.preventDefault();
        isScrollingRef.current = true;
        lastScrollTime.current = now;
        setCurrentStep((s) => s + 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      } else if (delta < 0 && currentStep > 0) {
        e.preventDefault();
        isScrollingRef.current = true;
        lastScrollTime.current = now;
        setCurrentStep((s) => s - 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isLocked, currentStep, totalSteps]);

  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isLocked) return;
      const delta = touchStartY - e.changedTouches[0].clientY;

      if (Math.abs(delta) < 40) return;

      if (delta > 0 && currentStep < totalSteps - 1) {
        e.preventDefault();
        setCurrentStep((s) => s + 1);
      } else if (delta < 0 && currentStep > 0) {
        e.preventDefault();
        setCurrentStep((s) => s - 1);
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isLocked, currentStep, totalSteps]);

  return { currentStep, containerRef, goToStep };
}
