import React from 'react';
import 'styles/global.css';
import { Main } from './components/Main/Main';
import { CurrencyDropdown } from './CurrencyDropdown/CurrencyDropdown';

export const App = () => {
  return (
    <>
      <Main />
      <CurrencyDropdown />
    </>
  );
};
