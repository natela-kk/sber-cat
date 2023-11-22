import React, { useState } from 'react';
import styles from './Main.module.css';
import { cat } from '../../assets';

const SCREEN_WIDTH = 498;

export const Main = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <h1 className={styles.title}>CAT</h1>
        <h2 className={styles.decryption}>currencies academic terms</h2>
      </div>
      {width > SCREEN_WIDTH && <img src={cat} className={styles.img} alt='logo cat' />}
    </main>
  );
};
