// src/components/SlideViewport/SlideViewport.tsx
import styles from './SlideViewport.module.scss';
import type { ReactNode } from 'react';

type SwipeHandlers = {
  onPointerDown: (e: React.PointerEvent) => void;
  onPointerMove: (e: React.PointerEvent) => void;
  onPointerUp: (e: React.PointerEvent) => void;
  onPointerCancel: (e: React.PointerEvent) => void;
};

export default function SlideViewport({
  title,
  children,
  swipeHandlers,
}: {
  title: string;
  children: ReactNode;
  swipeHandlers?: SwipeHandlers;
}) {
  return (
    <section className={styles.viewport} aria-label={title}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>

      <div className={styles.body} {...swipeHandlers}>
        {children}
      </div>
    </section>
  );
}
