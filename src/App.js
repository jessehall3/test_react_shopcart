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

  return (
    <Router>
      <div id="app">
        <aside>
          <Link to={`/`}>Products</Link>
          <Link to={`/add-product`}>Add product</Link>
        </aside>

        <main>
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route
            path="/add-product"
            render={() => <AddProduct addProduct={addProduct} />}
          />
          <Route path="/product/:slug" component={SingleProduct} />
          <Route component={NotFoundPage} />
        </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;
