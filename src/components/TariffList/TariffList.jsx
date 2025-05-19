import React from 'react'
import { tariffs } from './tariffsData'
import TariffCard from '../TariffCard/TariffCard'
import styles from './TariffList.module.css';

export default function TariffList() {
  return (
    <div className={styles.container}>
      {tariffs
        ? tariffs.map(t => <TariffCard key={t.price} {...t} isFeatured={t.price===550} />)
        : <p>Данные тарифов недоступны.</p>
      }
    </div>
  )
}