import React from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { useGetCurrencyQuery } from '../redux/api';
import { ICurrencies } from '../redux/interfaces';
import styles from './CurrencyDropdown.module.css';

export interface ICurrencyData {
  currencyId: string;
  currencyName: string;
}

export const CurrencyDropdown = () => {
  const { data, isSuccess, isLoading, isError, error } = useGetCurrencyQuery();

  if (isError) throw error;

  const currencyData: ICurrencyData[] = data?.data?.map((item: ICurrencies) => ({
    currencyId: item.id,
    currencyName: item.name,
  }));

  return (
    <>
      {isLoading && <span className={styles.loading}>Loading...</span>}
      {isSuccess && <Dropdown data={currencyData} />}
    </>
  );
};
