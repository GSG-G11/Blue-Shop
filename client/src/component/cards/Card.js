import React from 'react';
import axios from 'axios';

class Card extends React.Component {

  render() {
    const { min, max, category,addProduct,products } = this.props;
    // const { products } = this.state;
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
              <div className="card">
                <img
                  className="card-image"
                  src={element.image}
                  alt={element.name}
                />
                <h1 className="card-name">{element.name}</h1>
                <p className="card-price">{element.price}</p>
                <button className="add-btn" id={element.id} onClick={addProduct}>+ Add to cart</button>
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
