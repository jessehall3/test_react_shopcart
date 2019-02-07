import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AddProduct from './components/AddProduct.js'
import Cart from './components/Cart.js'
import ProductsList from './components/ProductsList.js'
import SingleProduct from './components/SingleProduct.js'
import NotFoundPage from './components/NotFoundPage.js'
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')) || [])
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  const addProduct = product => {
    const updatedProducts = [...products, product]
    setProducts(updatedProducts)
    localStorage.setItem('products', JSON.stringify(updatedProducts))
  }

  const deleteProduct = index => {
    const updatedProducts = [...products]
    updatedProducts.splice(index, 1)
    setProducts(updatedProducts)
    localStorage.setItem('products', JSON.stringify(updatedProducts))
  }

  const getProductFromSlug = (slug) => {
    slug = slug || null
    return products.find(p => p.slug === slug)
  }

  const addToCart = ({ product, quantity }) => {
    const index = cart.findIndex(
      itemInCart => itemInCart.product.slug === product.slug
    )

    let newCart = []

    if (index === -1) {
      //not existing
      newCart = [...cart, { product, quantity }]
    } else {
      quantity += cart[index].quantity
      newCart = cart
        .filter(item => item.product.slug !== product.slug)
        .concat({product, quantity})
    }
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  return (
    <Router>
      <div id="app">
        <aside>
          <Link to={`/`}>Products</Link>
          <Link to={`/add-product`}>Add product</Link>
        </aside>

        <main>
        <Cart cart={cart}/>
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
