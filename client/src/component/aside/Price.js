import React from 'react';

const Price = ({ onSet }) => {
  return (
    <>
      <div className="price">
        <div className="price-header">
          <h2>Price</h2>
        </div>
        <div className="category-body price-body">
          <form className="price-form" onSubmit={onSet}>
            <input
              className="category-body-input"
              type="number"
              placeholder="Min"
              name="min"
              required
            />
            <input
              className="category-body-input"
              type="number"
              placeholder="Max"
              name="max"
              required
            />
            <button
              className=" category-body-button"
              type="submit"
              name="price"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Price;
