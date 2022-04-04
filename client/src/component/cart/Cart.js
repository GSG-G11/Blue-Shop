import React from "react";



const Cart= (props)=>{

const productsLs = JSON.parse(localStorage.getItem("products"))||[];

const {deleteProduct} = props;

    return (
        <>
        <div className="cart" key='1'>
        {productsLs.map((product,index)=>{
           return <div className="card" key={index}>
                <img
                  className="card-image"
                  src={product.image}
                  alt={product.name}
                />
                <h1 className="card-name">{product.name}</h1>
                <p className="card-price">{product.price}</p>
              <button className="delete-btn" id={product.id} onClick={()=>deleteProduct(product.id)}>delete</button>
              </div>


        })}
        </div>
        </>
    )
}


export default Cart;