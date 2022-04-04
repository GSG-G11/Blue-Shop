import React from "react";


const Cart= (props)=>{
const {products} = props;
const productsLs = JSON.parse(localStorage.getItem("products"))||[];


function filterPro(arr1,arr2){

    let result=[]
        for (let id of arr1){

            for (let pro of arr2){

                if (+id===pro.id){
                    result.push(pro)}}} return result}

                 const filterProduct=   filterPro(productsLs,products)

    return (
        <>
        <div className="cart" key='1'>
        {filterProduct.map((product,index)=>{
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