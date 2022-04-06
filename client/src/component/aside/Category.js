import React from 'react';
import './aside.css';
const categories = [
  'all',
  'mens clothing',
  'jewelry',
  'electronics',
  'women clothing',
];

const Category = ({ setCategory, category: currentCategory }) => {
  return (
    <>
      <div className="category">
        <div className="category-header">
          <h2>Categories</h2>
        </div>
        <div className="category-body">
            {categories.map((category, index) => (
                <p key={index}>
                  <input
                    checked={category === currentCategory}
                    type="radio"
                    name="category"
                    value={category}
                    key={index}
                    onChange={setCategory}
                  />
                  <span className="category-name">{category}</span>{' '}
                </p>
            ))}
        </div>
      </div>
    </>
  );
};

export default Category;
