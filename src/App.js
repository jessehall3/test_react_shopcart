import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AddProduct from './components/AddProduct.js'
import ProductsList from './components/ProductsList.js'
import SingleProduct from './components/SingleProduct.js'
import NotFoundPage from './components/NotFoundPage.js'
import './App.css';

function App() {
  const [products, setProducts] = useState([])

  const addProduct = product => {
    setProducts([...products, product])
  }

  const deleteProduct = index => {
    const updatedProducts = [...products]
    updatedProducts.splice(index, 1)
    setProducts(updatedProducts)
  }

  const getProductFromSlug = (slug) => {
    slug = slug || null
    return products.find(p => p.slug === slug)
  }

  const addToCart = ({ product, quantity }) => {
    console.log(product, quantity)
  }

  return (
    <Router>
      <div id="app">
        <aside>
          <Link to={`/`}>Products</Link>
          <Link to={`/add-product`}>Add product</Link>
        </aside>

        <main>
        <Switch>
          <Route exact path="/"
            render={({history}) => {
              return <ProductsList products={products} deleteProduct={deleteProduct} history={history}/>
            }}
          />
          <Route
            path="/add-product"
            render={({history}) => {
                return <AddProduct addProduct={addProduct} history={history} />
              }}
          />
          <Route
            path="/product/:slug"
            render={({ match }) => {
              return <SingleProduct
                product={getProductFromSlug(match.params.slug)}
                addToCart={addToCart}/>
            }}
          />
          <Route component={NotFoundPage} />
        </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;
