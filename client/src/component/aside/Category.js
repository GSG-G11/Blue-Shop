import React from 'react';
import './aside.css';
const categories = [
  'all',
  'mens clothing',
  'jewelry',
  'electronics',
  'women clothing',
];

const Category = ({ setCategory }) => {
  return (
    <>
      <div className="category">
        <div className="category-header">
          <h2>Categories</h2>
        </div>
        <div className="category-body">
          <ul>
            {categories.map((category, index) => (
              <li>
                <label key={index}>
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    key={index}
                    onChange={setCategory}
                  />
                  <span className="category-name">{category}</span>{' '}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
