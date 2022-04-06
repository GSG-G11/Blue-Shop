import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import UpdateProduct from '../editProduct/EditProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export class ProductPage extends Component {
  state = {
    isEdit: false,
  };

  toggelEdit = () => {
    this.setState((prevState) => {
      return {
        isEdit: !prevState.isEdit,
      };
    });
  };

  deleteProduct = (id) => {
    const { deleteProductFromState } = this.props;
    axios
      .delete(`/api/v1/products/${id}`)
      .then(() => deleteProductFromState(id))
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const id = window.location.pathname.split('/')[2];
    const { products, updateProductFromState } = this.props;
    return products
      .filter((element) => element.id === +id)
      .map((element) => {
        return (
          <>
            <div className="product-product-container">
              <div className="product-img">
                <img
                  className="product-image"
                  src={element.image}
                  alt={element.name}
                />
              </div>
              <div className="product-info">
                <div className="product-title">
                  <h1 className="product-name">{element.name}</h1>
                </div>
                <div className="description">
                  <p className="product-description">{element.description}</p>
                </div>
                <div className="actions">
                  <p className="product-price">${element.price}</p>
                </div>
                <div className="btn-section">
                  <button
                    className="edit-btn"
                    id={element.id}
                    onClick={this.toggelEdit}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    className="delete-btn"
                    id={element.id}
                    onClick={() => {
                      this.deleteProduct(element.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
            {this.state.isEdit && (
              <UpdateProduct
                updateProductFromState={updateProductFromState}
                element={element}
                isEdit={this.state.isEdit}
                toggelEdit={this.toggelEdit}
              />
            )}
          </>
        );
      });
  }
}
export default ProductPage;
