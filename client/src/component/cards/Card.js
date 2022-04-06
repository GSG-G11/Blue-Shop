import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { min, max, category, addProduct, products, search, logged } =
      this.props;
    return products.length ? (
      products
        .filter(
          (product) =>
            (product.category === category || category === 'all') &&
            product.price >= +min &&
            product.price <= +max &&
            product.name.toLowerCase().includes(search)
        )
        .map((element) => {
          return (
            <>
              <div className="card">
                <div className="card-img">
                  <img
                    className="card-image"
                    src={element.image}
                    alt={element.name}
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <Link to={`/product/${element.id}`}>
                      <p className="card-name">{element.name}</p>
                    </Link>
                  </div>
                  <div className="actions">
                    <p className="card-price">${element.price}</p>
                    {logged ? null : (
                      <button
                        className="add-btn"
                        id={element.id}
                        onClick={(e) => {
                          addProduct(element);
                        }}
                      >
                        + Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })
    ) : (
      <div class="container">
        <div class="loader"></div>
      </div>
    );
  }
}
export default Card;
