import React from 'react';
import './aside.css';
import Price from './Price';
import Category from './Category';

const Aside = ({onSet, setCategory}) => {
  return (
    <aside>
    <Category setCategory={setCategory} />
    <Price onSet={onSet} />
    </aside>
  );
};

export default Aside;
