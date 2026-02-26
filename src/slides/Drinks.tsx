import { useMemo, useState } from 'react';
import { MENU_ITEMS } from '../data/menu';
import type { DrinkType, MenuItem } from '../types/menu';
// import BottomSheet from '../components/ui/BottomSheet';
import MenuCard from '../components/menu/MenuCard';
import styles from './Drinks.module.scss';
import MenuItemSheet from '../components/menu/MenuItemSheet';

type Filter = 'all' | DrinkType;

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'cocktail', label: 'Cocktails' },
  { id: 'na', label: 'Non-Alcoholic' },
  { id: 'beer', label: 'Beer' },
  { id: 'wine', label: 'Wine' },
];

export default function Drinks() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const drinks = useMemo(() => {
    const base = MENU_ITEMS.filter((i) => i.categoryId === 'drinks');
    if (filter === 'all') return base;
    return base.filter((i) => i.drinkType === filter);
  }, [filter]);

  return (
    <div className={styles.wrap}>
      <div className={styles.filters} role='tablist' aria-label='Drink filters'>
        {FILTERS.map((f) => {
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              type='button'
              role='tab'
              aria-selected={active}
              className={
                active ? `${styles.chip} ${styles.active}` : styles.chip
              }
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className={styles.list} role='list'>
        {drinks.map((item) => (
          <div key={item.id} role='listitem'>
            <MenuCard item={item} onClick={() => setSelected(item)} />
          </div>
        ))}
      </div>

      <MenuItemSheet
        open={!!selected}
        item={selected}
        onClose={() => setSelected(null)}
        orderHref='https://example.com/order'
      />
    </div>
  );
}
