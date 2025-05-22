import React from 'react';
import styles from './TariffCard.module.css';

export default function TariffCard({
  name,
  price,
  speed,
  headerClass,
  isRecommended,
  isSelected,
  onSelect
}) {
  const cardClass = isSelected
    ? `${styles.card} ${styles.selected}`
    : styles.card;

  return (
    <div
      className={cardClass}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect()}
    >
      {isRecommended && <span className={styles.badge}>🔥</span>}

      <div className={`${styles.header} ${styles[headerClass]}`}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.price}>
          {price}
          <span className={styles.currency}> ₽</span>
          <span className={styles.unit}>/мес</span>
        </p>
      </div>

      <p className={styles.speed}>до {speed} Мбит/сек</p>
      <p className={styles.traffic}>Объем включенного трафика не ограничен</p>
    </div>
  );
}
