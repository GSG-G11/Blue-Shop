import React from 'react';
import Category from './Category';
import Card from './cards/Card';
<<<<<<< Updated upstream
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
=======
import Aside from './aside/Aside';
function Landing({
  actions: { setCategory, onSetValue, add },
  values: { min, max, category, products, search },
}) {
  return (
    <div className='landing'>
      <Aside setCategory={setCategory} onSet={onSetValue} />
      <div className='card-container'>
        <Card
          min={min}
          max={max}
          search={search}
          category={category}
          addProduct={add}
          products={products}
        />
      </div>
    </div>
>>>>>>> Stashed changes
  );
}

export default Landing;
