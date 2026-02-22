// src/app/App.tsx
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SLIDES } from './slides';
import AppShell from '../components/AppShell/AppShell';
import SlideViewport from '../components/SlideViewport/SlideViewport';
import BottomNav from '../components/BottomNav/BottomNav';
import { useSwipeNavigation } from '../hooks/useSwipeNavigation';

const STORAGE_KEY = 'activeSlideId';

export default function App() {
  const defaultId = SLIDES[0]?.id ?? 'home';

  const [activeId, setActiveId] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && SLIDES.some((s) => s.id === saved) ? saved : defaultId;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, activeId);
  }, [activeId]);

  const activeIndex = useMemo(
    () =>
      Math.max(
        0,
        SLIDES.findIndex((s) => s.id === activeId),
      ),
    [activeId],
  );

  const activeSlide = SLIDES[activeIndex] ?? SLIDES[0];

  const goNext = useCallback(() => {
    const next = SLIDES[activeIndex + 1];
    if (next) setActiveId(next.id);
  }, [activeIndex]);

  const goPrev = useCallback(() => {
    const prev = SLIDES[activeIndex - 1];
    if (prev) setActiveId(prev.id);
  }, [activeIndex]);

  // Swipe left -> next tab, swipe right -> previous tab
  const swipeHandlers = useSwipeNavigation(goNext, goPrev, {
    thresholdPx: 55,
    restraintPx: 70,
  });

  return (
    <AppShell
      content={
        <SlideViewport title={activeSlide.label} swipeHandlers={swipeHandlers}>
          {activeSlide.element}
        </SlideViewport>
      }
      nav={
        <BottomNav slides={SLIDES} activeId={activeId} onChange={setActiveId} />
      }
    />
  );
}
