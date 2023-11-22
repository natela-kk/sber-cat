import React from 'react';
import 'styles/global.css';
import { DropDown } from './components/DropDown/DropDown';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <Main />
      <DropDown />
      <Footer title='title' />
    </>
  );
};
