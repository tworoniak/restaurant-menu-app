// src/hooks/useSwipeNavigation.ts
import { useCallback, useRef } from 'react';

type SwipeHandlers = {
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerUp: (e: React.PointerEvent) => void;
  onPointerCancel: (e: React.PointerEvent) => void;
};

type Options = {
  thresholdPx?: number; // how far to swipe to trigger
  restraintPx?: number; // max vertical movement allowed
};

export function useSwipeNavigation(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  { thresholdPx = 50, restraintPx = 60 }: Options = {},
): SwipeHandlers {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const tracking = useRef(false);

  const reset = () => {
    startX.current = null;
    startY.current = null;
    tracking.current = false;
  };

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    // Only track primary touch/pen/mouse
    if (!e.isPrimary) return;

    tracking.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;

    // Capture so we keep getting events even if finger drifts
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!tracking.current || startX.current == null || startY.current == null)
      return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    // If user is primarily scrolling vertically, don't interfere
    if (Math.abs(dy) > Math.abs(dx)) return;

    // Prevent horizontal scroll/gesture from fighting the browser
    // (doesn't stop vertical scrolling because we early-return above)
    if (Math.abs(dx) > 8) e.preventDefault?.();
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!tracking.current || startX.current == null || startY.current == null)
        return;

      const dx = e.clientX - startX.current;
      const dy = e.clientY - startY.current;

      // too much vertical movement -> treat as scroll, not swipe
      if (Math.abs(dy) > restraintPx) {
        reset();
        return;
      }

      if (dx <= -thresholdPx) onSwipeLeft();
      else if (dx >= thresholdPx) onSwipeRight();

      reset();
    },
    [onSwipeLeft, onSwipeRight, thresholdPx, restraintPx],
  );

  const onPointerCancel = useCallback(() => reset(), []);

  return { onPointerDown, onPointerMove, onPointerUp, onPointerCancel };
}
