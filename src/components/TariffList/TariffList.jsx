import React, { useState } from 'react';
import { tariffs, recommendedTariffPrice } from '../../data/tariffsData';
import TariffCard from '../TariffCard/TariffCard';
import styles from './TariffList.module.css';

export default function TariffList() {
  const initialSelected = tariffs.some(t => t.price === recommendedTariffPrice)
    ? recommendedTariffPrice
    : tariffs[0]?.price;

  const [selectedPrice, setSelectedPrice] = useState(initialSelected);

  return (
    <div className={styles.container}>
      {tariffs.map(t => (
        <TariffCard
          key={t.price}
          {...t}
          isRecommended={t.price === recommendedTariffPrice}   
          isSelected={t.price === selectedPrice}               
          onSelect={() => setSelectedPrice(t.price)}
        />
      ))}
    </div>
  );
}
