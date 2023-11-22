import React from 'react';
import styles from './Main.module.css';

export const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.logo}>
          <h1 className={styles.title}>CAT</h1>
          <h2 className={styles.decryption}>currencies academic terms</h2>
        </div>
      </main>
    </>
  );
};
