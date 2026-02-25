import styles from './CategoryChips.module.scss';
import type { MenuCategoryId, MenuCategory } from '../../types/menu';

type Props = {
  categories: MenuCategory[];
  activeId: MenuCategoryId;
  onChange: (id: MenuCategoryId) => void;
};

export default function CategoryChips({
  categories,
  activeId,
  onChange,
}: Props) {
  return (
    <div className={styles.wrap} role='tablist' aria-label='Menu categories'>
      {categories.map((c) => {
        const active = c.id === activeId;
        return (
          <button
            key={c.id}
            type='button'
            role='tab'
            aria-selected={active}
            className={active ? `${styles.chip} ${styles.active}` : styles.chip}
            onClick={() => onChange(c.id)}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
