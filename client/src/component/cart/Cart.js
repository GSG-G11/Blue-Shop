import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Delete from './DeleteConfirm';

const Cart = (props) => {
  const productsLs = JSON.parse(localStorage.getItem('products')) || [];

  const { deleteProduct, show, confirm, toDeleteId, hide } = props;

  return (
    <>
      <div className='cart-container' key='1'>
        {productsLs.map((product, index) => {
          return (
            <div className='card' key={index}>
              <div className='card-img'>
                <img
                  className='card-image'
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className='product-info'>
                <p className='card-name'>{product.name}</p>
                <p className='card-price'>{product.price}</p>
              </div>

              <div className='delete-btn-div'>
                <button
                  className='delete-btn'
                  id={product.id}
                  onClick={confirm}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <Delete
                id={toDeleteId}
                show={show}
                deleteProduct={deleteProduct}
                hide={hide}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
