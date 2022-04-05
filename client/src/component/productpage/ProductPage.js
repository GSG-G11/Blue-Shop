import React, { Component } from 'react';
import axios from 'axios';

export class ProductPage extends Component {
  deleteProduct = (id) => {
    const { deleteProductFromState } = this.props;
    axios
      .delete(`http://localhost:8080/api/v1/products/${id}`)
      .then(() => deleteProductFromState(id))
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const id = window.location.pathname.split('/')[2];
    const { products } = this.props;
    return products
      .filter((element) => element.id === +id)
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
                  <h1 className="card-name">{element.name}</h1>
                </div>
                <div className='description'>
                    <p className='product-description'>{element.description}</p>

                </div>
                <div className="actions">
                  <p className="card-price">${element.price}</p>
                </div>
                <div className="btn-section">
                  <button className="add-btn" id={element.id}>
                    Edit
                  </button>
                  <button
                    className="add-btn"
                    id={element.id}
                    onClick={() => {
                      this.deleteProduct(element.id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      });
  }
}
export default ProductPage;
