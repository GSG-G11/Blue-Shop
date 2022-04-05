import React from 'react';
import Card from './cards/Card';
import Aside from './aside/Aside';
function Landing({
  actions: { setCategory, onSetValue, add },
  values: { min, max, category, products },
}) {
  return (
    <div className='landing'>
      <Aside setCategory={setCategory} onSet={onSetValue} />
      <div className='card-container'>
        <Card
          min={min}
          max={max}
          category={category}
          addProduct={add}
          products={products}
        />
      </div>
    </div>
  );
}

export default Landing;
