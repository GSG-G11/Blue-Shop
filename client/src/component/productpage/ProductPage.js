import React, { Component } from 'react';
import axios from 'axios';
import UpdateProduct from '../editProduct/EditProduct';

export class ProductPage extends Component {


state={
  isEdit:false
}

toggelEdit=()=>{

this.setState((prevState)=>{
  return {
    isEdit:!prevState.isEdit
  }

})}


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
    const { products,updateProductFromState  } = this.props;
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
                  <button className="edit-btn" id={element.id} onClick={this.toggelEdit} > 
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
            <UpdateProduct updateProductFromState={updateProductFromState} element={element} isEdit={this.state.isEdit} toggelEdit={this.toggelEdit} />
          </>
        );
      });
  }
}
export default ProductPage;
