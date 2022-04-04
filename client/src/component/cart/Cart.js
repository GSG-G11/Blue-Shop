import React from "react";


const Cart= ()=>{

const productsLs = JSON.parse(localStorage.getItem("products"))||[];



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
              
              </div>


        })}
        </div>
        </>
    )
}


export default Cart;