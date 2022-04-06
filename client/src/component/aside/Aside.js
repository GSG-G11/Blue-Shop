import React from 'react';
import './aside.css';
import Price from './Price';
import Category from './Category';

const Aside = ({ onSet, setCategory, category }) => {
  return (
    <aside className="aside-body">
      <Category category={category} setCategory={setCategory} />
      <Price onSet={onSet} />
    </aside>
  );
};

export default Aside;
