import React from 'react';
import styles from './TariffCard.module.css';

export default function TariffCard({ name, price, speed, color, isFeatured }) {
  const cardClass = isFeatured
    ? `${styles.card} ${styles.featured}`
    : styles.card;

  return (
    <div className={cardClass}>
      {isFeatured && (
        <span className={styles.badge}>
          🔥
        </span>
      )}

      <div
        className={styles.header}
        style={{ backgroundColor: color, color: '#fff' }}
      >
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
