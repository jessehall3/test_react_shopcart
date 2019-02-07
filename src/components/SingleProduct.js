import React from 'react';

function SingleProduct(props) {
  const addToCart = () => {
    props.addToCart({ product: props.product, quantity: 1 })
  }

  const quantitySelect = (len=20) => {
    const numArray =  Array.from({length: len}, (x,i) => i + 1)
    const options = numArray.map( num => {
      return  <option value={num}>{num}</option>
    })
    return(
      <div>
        <label htmlFor="quantity">Quantity</label>
        <select name="quantity">
        {options}
        </select>
      </div>
    )
  }

  const productDiv = (product) => {
    return(
      <div className="single-product">
      <img src={product.image} />
      <h2>{product.name}</h2>
      <p className="description">{product.description}</p>
      <p className="price">${product.price}</p>
      {quantitySelect()}
      <button onClick={addToCart}>Add to cart</button>
      </div>
    )
  }

  return props.product ? productDiv(props.product) : <p>No Product Found</p>
}

export default SingleProduct;
