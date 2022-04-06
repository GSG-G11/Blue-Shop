import React from 'react';
import Card from '../cards/Card';
import Aside from '../aside/Aside';
import './style.css';
import ServerError from '../Errors/ServerError';
function Landing({
  actions: { setCategory, onSetValue, add },
  values: { min, max, category, products, search, errorMessage },
  category: currentCategory,
}) {
  return (
    <div className='landing'>
      { !errorMessage ? (
        <>
          <Aside
            category={currentCategory}
            setCategory={setCategory}
            onSet={onSetValue}
          />
          <div className='card-container'>
            <Card
              min={min}
              max={max}
              search={search}
              category={category}
              addProduct={add}
              products={products}
              errorMessage={errorMessage}
            />
          </div>
        </>
      ) : (
        <ServerError />
      )}
    </div>
  );
}

export default Landing;
