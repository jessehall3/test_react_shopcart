import React from 'react';

function ProductsList(props) {
  const productsList = (products) => {
    return products.map((value, index) => {
      return (
        <div key={index}>
        <img src={value.image} />
        <h2>{value.name}</h2>
        <p className="description">{value.description}</p>
        <p className="price">${value.price}</p>
        </div>
      )
    })
  }

  return (
    <div className="products-list">
      {props.products.length ? productsList(props.products) : 'No products'}
    </div>
  )
}

export default ProductsList;
