import React from 'react';
import Card from '../cards/Card';
import Aside from '../aside/Aside';
import './style.css';
import ServerError from '../Errors/ServerError';
function Landing({
  actions: { setCategory, onSetValue, add },
<<<<<<< HEAD
  values: { min, max, category, products, search,logged },
  category: currentCategory,
}) {
  return (
    <div className="landing">
      <Aside category={currentCategory} setCategory={setCategory} onSet={onSetValue} />
      <div className="card-container">
        <Card
          min={min}
          max={max}
          search={search}
          category={category}
          addProduct={add}
          products={products}
          logged={logged}
        />
      </div>
=======
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
>>>>>>> cbeedbe86d2edc6f2e7bac2e251fcba6bbfa96f1
    </div>
  );
}

export default Landing;
