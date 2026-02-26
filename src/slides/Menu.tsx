import { useMemo, useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menu';
import type { MenuCategoryId, MenuItem } from '../types/menu';
import CategoryChips from '../components/menu/CategoryChips';
import MenuCard from '../components/menu/MenuCard';
// import BottomSheet from '../components/ui/BottomSheet';
import MenuItemSheet from '../components/menu/MenuItemSheet';

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

      <MenuItemSheet
        open={!!selected}
        item={selected}
        onClose={() => setSelected(null)}
        orderHref='https://example.com/order'
      />
    </div>
  );
}
