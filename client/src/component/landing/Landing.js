import React from 'react';
import Card from '../cards/Card';
import Aside from '../aside/Aside';
import './style.css';
function Landing({
  actions: { setCategory, onSetValue, add },
  values: { min, max, category, products, search },
}) {
  return (
    <div className="landing">
      <div className="aside-container">
        <Aside setCategory={setCategory} onSet={onSetValue} />
      </div>
      <div className="card-container">
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
  );
}

export default Landing;
