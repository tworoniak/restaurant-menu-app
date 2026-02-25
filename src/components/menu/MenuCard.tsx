import styles from './MenuCard.module.scss';
import type { MenuItem } from '../../types/menu';
import { formatMoney } from '../../utils/money';

type Props = {
  item: MenuItem;
  onClick: () => void;
};

function tagLabel(t: string) {
  // simple display for badges
  return t;
}

export default function MenuCard({ item, onClick }: Props) {
  return (
    <button type='button' className={styles.card} onClick={onClick}>
      <div className={styles.top}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>{formatMoney(item.price)}</span>
        </div>

        {item.tags?.length ? (
          <div className={styles.tags} aria-label='Dietary tags'>
            {item.tags.map((t) => (
              <span key={t} className={styles.tag}>
                {tagLabel(t)}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <p className={styles.desc}>{item.description}</p>
    </button>
  );
}
