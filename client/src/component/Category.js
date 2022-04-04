import React,{Fragment} from 'react';


const categories = [
    'all',
    'mens clothing',
    'jewelery',
    'electronics',
    'womens clothing'
  ];


const Category = ({setCategory}) => {
    return (
        <Fragment>
            <div className="category">
                <h2>Categories</h2>
                <ul>
                    {categories.map((category,index) => (
                        <label key={index}>
              {category}{' '}
              <input
                type="radio"
                name="category"
                value={category}
                key={index}
                onChange={setCategory}
              />
            </label>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}


export default Category;