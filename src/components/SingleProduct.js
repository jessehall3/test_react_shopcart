import React, { useState } from 'react';

function SingleProduct(props) {
  const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    props.addToCart({ product: props.product, quantity})
  }

  const handleChangeQuantity = e => {
    const newValue = parseInt(e.target.value)
    setQuantity(newValue)
  }

  const quantitySelect = (len=20) => {
    const numArray =  Array.from({length: len}, (x,i) => i + 1)
    const options = numArray.map( (num, index) => {
      return  <option key={index} value={num}>{num}</option>
    })
    return(
      <div>
        <label htmlFor="quantity">Quantity</label>
        <select name="quantity" onChange={handleChangeQuantity}>
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
