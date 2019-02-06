import React, { useState } from 'react';

function AddProduct() {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangePrice = e => {
    setPrice(e.target.value)
  }

  const handleChangeDescription = e => {
    setDescription(e.target.value)
  }

  const handleChangeImage = e => {
    setImage(e.target.value)
  }

  return (
    <div>
      <form>
        <h1>Add Product</h1>
        <div>
          <label>Name:</label>
          <input required onChange={handleChangeName} />
        </div>
        <div>
          <label>Price in $:</label>
          <input required onChange={handleChangePrice} />
        </div>
        <div>
          <label>Description:</label>{' '}
          <textarea required onChange={handleChangeDescription} />
        </div>
        <div>
          <label>Image URL:</label>
          <input required onChange={handleChangeImage} />
        </div>
        <input type="submit" value="Add" className="button" />
      </form>
    </div>
  )
}

export default AddProduct;
