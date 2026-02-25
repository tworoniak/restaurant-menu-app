import { useEffect } from 'react';
import styles from './BottomSheet.module.scss';

type Props = {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function BottomSheet({ open, title, children, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.backdrop}
      role='dialog'
      aria-modal='true'
      onClick={onClose}
    >
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.grabber} aria-hidden='true' />
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        <div className={styles.body}>{children}</div>

        <button type='button' className={styles.close} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
