import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
class Card extends React.Component {
  render() {
    const { min, max, category, addProduct, products } = this.props;
    console.log(min , max);
    return products.length ? (
      products
        .filter(
          (product) =>
            (product.price > min &&
              product.price < max &&
              product.category === category) ||
            category === 'all'
        )
        .map((element) => {
          return (
            <>
              <div className='card'>
                <div className='card-img'>
                  <img
                    className='card-image'
                    src={element.image}
                    alt={element.name}
                  />
                </div>
                <div className='card-body'>
                  <div className='card-title'>
                    <Link to={`/product/${element.id}`}>
                      <h1 className='card-name'>{element.name}</h1>
                    </Link>
                  </div>
                  <div className='actions'>
                    <p className='card-price'>${element.price}</p>
                    <button
                      className='add-btn'
                      id={element.id}
                      onClick={(e) => {
                        addProduct(element);
                      }}
                    >
                      + Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })
    ) : (
      <h1>there is no products</h1>
    );
  }
}
export default Card;
