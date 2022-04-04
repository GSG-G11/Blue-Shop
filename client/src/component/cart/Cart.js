import React from "react";


const Cart= (props)=>{
const {products} = props;
console.log(products)
const productsLs = JSON.parse(localStorage.getItem("products"))||[];
const a = products.filter((product,index)=> +product.id === +productsLs[index])
    console.log(a,11213132123123123123)
    return (
        <>
        <div className="cart" key='1'>
        {/* <h1>{products}</h1> */}
        </div>
        </>
    )
}


export default Cart;