"use client";

import { useEffect, useRef, useState, type Dispatch, type RefObject, type SetStateAction } from "react";

/**
 * Trava o scroll na seção apontada por `ref` e avança um "step" por wheel/touch.
 *
 * Retorna `[activeStep, setActiveStep]` — o setter permite navegação por click
 * (ex: clicar no número do step pra ir direto).
 *
 * Comportamento:
 * - Ativa apenas em larguras ≥ `minWidth` (default 900).
 * - Trava ao descer (wheel.deltaY > 0 / swipe up). Subir passa livre.
 * - Libera após o último step (sem `preventDefault`), permitindo seguir o scroll.
 * - Reage a resize: ao cruzar o breakpoint, registra/limpa listeners dinamicamente.
 * - O setter externo (click) também conta como avanço — se chegar no último,
 *   o lock é liberado naturalmente.
 */
export function useProcessScrollLock(
  ref: RefObject<HTMLElement | null>,
  totalSteps: number,
  minWidth = 900
): readonly [number, Dispatch<SetStateAction<number>>] {
  const [activeStep, setActiveStep] = useState(0);
  const activeRef = useRef(activeStep);
  activeRef.current = activeStep;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    const lastIndex = totalSteps - 1;
    let cleanup: (() => void) | null = null;

    const enable = () => {
      let inView = false;
      let lock = false;
      const LOCK_AT_TOP = 40;
      let wasInView = false;
      let lastScrollY = window.scrollY;
      setActiveStep(0);

      const onScroll = () => {
        const rect = el.getBoundingClientRect();
        const sectionH = el.offsetHeight;
        const goingDown = window.scrollY > lastScrollY;
        lastScrollY = window.scrollY;

        const nowInView =
          rect.top <= LOCK_AT_TOP && rect.top > -(sectionH - 200);

        if (nowInView && !wasInView && goingDown) {
          setActiveStep(0);
        }

        inView = nowInView;
        wasInView = nowInView;
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      const onWheel = (e: WheelEvent) => {
        if (!inView) return;
        const goingDown = e.deltaY > 0;
        if (!goingDown) return;
        const current = activeRef.current;
        if (current >= lastIndex) return;
        e.preventDefault();
        if (lock) return;
        lock = true;
        setActiveStep(Math.min(lastIndex, current + 1));
        window.setTimeout(() => {
          lock = false;
        }, 550);
      };

      let touchStartY = 0;
      const onTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0]?.clientY ?? 0;
      };
      const onTouchMove = (e: TouchEvent) => {
        if (!inView) return;
        const y = e.touches[0]?.clientY ?? 0;
        const dy = touchStartY - y;
        if (Math.abs(dy) < 24) return;
        const goingDown = dy > 0;
        if (!goingDown) return;
        const current = activeRef.current;
        if (current >= lastIndex) return;
        e.preventDefault();
        if (lock) return;
        lock = true;
        setActiveStep(Math.min(lastIndex, current + 1));
        touchStartY = y;
        window.setTimeout(() => {
          lock = false;
        }, 550);
      };

      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: false });

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
      };
    };

    const apply = () => {
      cleanup?.();
      cleanup = null;
      if (mq.matches) {
        cleanup = enable();
      } else {
        setActiveStep(0);
      }
    };

    apply();
    mq.addEventListener("change", apply);

    return () => {
      mq.removeEventListener("change", apply);
      cleanup?.();
    };
  }, [ref, totalSteps, minWidth]);

  return [activeStep, setActiveStep] as const;
}
