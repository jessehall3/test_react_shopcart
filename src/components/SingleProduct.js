import React from 'react';

function SingleProduct(props) {
  console.log(props.product);
  return (
    <div>
      <h1>Single Product</h1>
      <h1>{props.product ? props.product.name : "foo"}</h1>
    </div>
  )
}

export default SingleProduct;
