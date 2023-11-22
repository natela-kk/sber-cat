import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Footer.module.css';

interface IFooter {
  title: string;
}
export const Footer = ({ title }: IFooter) => {
  return createPortal(
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
    </div>,
    document.querySelector('#portal' || 'body')!,
  );
};
