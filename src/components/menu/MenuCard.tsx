import styles from './MenuCard.module.scss';
import type { MenuItem } from '../../types/menu';
import { formatMoney } from '../../utils/money';

type Props = { item: MenuItem; onClick: () => void };

export default function MenuCard({ item, onClick }: Props) {
  return (
    <button type='button' className={styles.card} onClick={onClick}>
      {item.image ? (
        <div className={styles.thumb}>
          <img
            src={item.image.src}
            alt={item.image.alt}
            loading='lazy'
            decoding='async'
          />
        </div>
      ) : null}

      <div className={styles.content}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>{formatMoney(item.price)}</span>
        </div>

        {item.tags?.length ? (
          <div className={styles.tags} aria-label='Dietary tags'>
            {item.tags.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <p className={styles.desc}>{item.description}</p>
      </div>
    </button>
  );
}
