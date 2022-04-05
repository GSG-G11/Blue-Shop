import React from 'react';
<<<<<<< Updated upstream

=======
import './card.css';
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

class Card extends React.Component {

  render() {
<<<<<<< Updated upstream
    const { min, max, category,addProduct,products } = this.props;
   
=======
    const { min, max, category, addProduct, products, search } = this.props;
    console.table(products)
>>>>>>> Stashed changes
    return products.length ? (
      products
        .filter(
          (product) =>
            (product.category === category || category === 'all') &&
            (product.price >= +min &&
            product.price <= +max)&& product.name.toLowerCase().includes(search)
        )
        .map((element) => {
          return (
            <>
              <div className="card" >
                <img
                  className="card-image"
                  src={element.image}
                  alt={element.name}
                />
                <h1 className="card-name">{element.name}</h1>
                <p className="card-price">{element.price}</p>
                <button className="add-btn" id={element.id} onClick={(e)=>{addProduct(element)}}>+ Add to cart</button>
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
