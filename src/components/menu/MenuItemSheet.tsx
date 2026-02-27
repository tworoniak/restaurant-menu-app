import BottomSheet from '../ui/BottomSheet';
import styles from './MenuItemSheet.module.scss';
import type { MenuItem } from '../../types/menu';
import { formatMoney } from '../../utils/money';

type Props = {
  open: boolean;
  item: MenuItem | null;
  onClose: () => void;
  // optional CTA link for "Order"
  orderHref?: string;
};

export default function MenuItemSheet({
  open,
  item,
  onClose,
  // orderHref,
}: Props) {
  return (
    <BottomSheet
      open={open}
      title={item?.name}
      onClose={onClose}
      // footer={
      //   orderHref ? (
      //     <a
      //       className={styles.cta}
      //       href={orderHref}
      //       target='_blank'
      //       rel='noreferrer'
      //     >
      //       Order Online
      //     </a>
      //   ) : null
      // }
    >
      {item ? (
        <div className={styles.grid}>
          {/* LEFT: Image */}
          <div className={styles.media}>
            {item.image ? (
              <img
                src={item.image.src}
                alt={item.image.alt}
                className={styles.image}
                loading='lazy'
                decoding='async'
              />
            ) : (
              <div className={styles.placeholder} aria-hidden='true' />
            )}
          </div>

          {/* RIGHT: Info */}
          <div className={styles.info}>
            <div className={styles.row}>
              <span className={styles.price}>{formatMoney(item.price)}</span>

              {item.spicy ? (
                <span
                  className={styles.spicy}
                  aria-label={`Spice level ${item.spicy} of 3`}
                >
                  {'🌶️'.repeat(item.spicy)}
                </span>
              ) : null}

              {item.drinkType ? (
                <p className={styles.meta}>
                  <strong>Type:</strong> {labelDrinkType(item.drinkType)}
                </p>
              ) : null}
            </div>

            <p className={styles.desc}>{item.description}</p>

            {item.tags?.length ? (
              <div className={styles.tags} aria-label='Dietary tags'>
                {item.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            ) : null}

            {item.allergens?.length ? (
              <p className={styles.meta}>
                <strong>Allergens:</strong> {item.allergens.join(', ')}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </BottomSheet>
  );
}

function labelDrinkType(t: string) {
  switch (t) {
    case 'cocktail':
      return 'Cocktail';
    case 'na':
      return 'Non-Alcoholic';
    case 'beer':
      return 'Beer';
    case 'wine':
      return 'Wine';
    case 'coffee':
      return 'Coffee';
    default:
      return 'Other';
  }
}
