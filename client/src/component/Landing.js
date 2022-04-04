import React from 'react';
import Category from './Category';
import Card from './cards/Card';
import Price from './Price';

function Landing({actions:{setCategory, onSetValue} , values:{min,max,category}}) {
  return (
    <>
      <Category setCategory={setCategory} />
      <Price onSet={onSetValue} />
      <Card
        min={min}
        max={max}
        category={category}
      />
    </>
  );
}

export default Landing;
