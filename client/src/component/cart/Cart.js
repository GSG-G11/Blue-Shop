import React from 'react';
import SweetAlert from 'sweetalert-react';
const Cart = (props) => {
  const productsLs = JSON.parse(localStorage.getItem('products')) || [];

  const { deleteProduct,show,confirm } = props;

  return (
    <>
      <div className='cart' key='1'>
        {productsLs.map((product, index) => {
          return (
            <div className='card' key={index}>
              <img
                className='card-image'
                src={product.image}
                alt={product.name}
              />
              <h1 className='card-name'>{product.name}</h1>
              <p className='card-price'>{product.price}</p>
              <button
                className='delete-btn'
                id={product.id}
                onClick={confirm}
              >
                delete
              </button>
              <SweetAlert
                show={show}
                title='Demo'
                text='SweetAlert in React'

                onConfirm={() => deleteProduct(product.id)}

              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
