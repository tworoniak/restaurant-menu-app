import { useMemo, useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menu';
import type { MenuCategoryId, MenuItem } from '../types/menu';
import CategoryChips from '../components/menu/CategoryChips';
import MenuCard from '../components/menu/MenuCard';
import BottomSheet from '../components/ui/BottomSheet';

import styles from './Menu.module.scss';

export default function Menu() {
  const [activeCat, setActiveCat] = useState<MenuCategoryId>('appetizers');
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const categories = useMemo(
    () => [...CATEGORIES].sort((a, b) => a.sortOrder - b.sortOrder),
    [],
  );

  const items = useMemo(
    () => MENU_ITEMS.filter((i) => i.categoryId === activeCat),
    [activeCat],
  );

  return (
    <div className={styles.wrap}>
      <CategoryChips
        categories={categories}
        activeId={activeCat}
        onChange={setActiveCat}
      />

      <div className={styles.list} role='list'>
        {items.map((item) => (
          <div key={item.id} role='listitem'>
            <MenuCard item={item} onClick={() => setSelected(item)} />
          </div>
        ))}
      </div>

      <BottomSheet
        open={!!selected}
        title={selected?.name}
        onClose={() => setSelected(null)}
      >
        {selected ? (
          <>
            <p className={styles.sheetDesc}>{selected.description}</p>

            {selected.allergens?.length ? (
              <p className={styles.meta}>
                <strong>Allergens:</strong> {selected.allergens.join(', ')}
              </p>
            ) : null}

            {selected.image ? (
              <img
                src={selected.image.src}
                alt={selected.image.alt}
                className={styles.sheetImage}
              />
            ) : null}

            {selected.tags?.length ? (
              <p className={styles.meta}>
                <strong>Tags:</strong> {selected.tags.join(', ')}
              </p>
            ) : null}
          </>
        ) : null}
      </BottomSheet>
    </div>
  );
}
