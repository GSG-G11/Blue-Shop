import React from 'react';
import Category from './Category';
import Card from './cards/Card';
import Price from './Price';

function Landing({actions:{setCategory, onSetValue,add} , values:{min,max,category,products}}) {
  return (
    <>
      <Category setCategory={setCategory} />
      <Price onSet={onSetValue} />
      <Card
        min={min}
        max={max}
        category={category}
        addProduct={add}
        products={products}
      />
    </>
  );
}

export default Landing;
