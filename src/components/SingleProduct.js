import React from 'react';

function SingleProduct(props) {
  const productDiv = (product) => {
    return <div className="single-product">
    <img src={product.image} />
    <h2>{product.name}</h2>
    <p className="description">{product.description}</p>
    <p className="price">${product.price}</p>
    </div>
  }

  return props.product ? productDiv(props.product) : <p>No Product Found</p>
}

export default SingleProduct;
