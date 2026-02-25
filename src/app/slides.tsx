import type { ReactNode } from 'react';
import Menu from '../slides/Menu';

export type SlideDef = {
  id: string;
  label: string;
  element: ReactNode;
};

export const SLIDES: SlideDef[] = [
  { id: 'menu', label: 'Menu', element: <Menu /> },
  // Add these next:
  // { id: "specials", label: "Specials", element: <Specials /> },
  // { id: "hours", label: "Hours", element: <HoursLocation /> },
  // { id: "order", label: "Order", element: <Order /> },
];
