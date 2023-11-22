import React, { useState } from 'react';
import styles from './DropDown.module.css';
import { arrowDown } from '../../assets';

export const DropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const OnDropDownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.label} onClick={OnDropDownClick}>
        list
        <img className={styles.arrowDown} src={arrowDown} />
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          <li className={styles.optionsItem}>listItem</li>
          <li className={styles.optionsItem}>listItem</li>
          <li className={styles.optionsItem}>listItem</li>
        </ul>
      )}
    </div>
  );
};
