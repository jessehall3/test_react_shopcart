import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct.js'
import ProductsList from './components/ProductsList.js'
import SingleProduct from './components/SingleProduct.js'
import './App.css';

function App() {
  return (
    <Router>
      <div id="app">
        <aside>
          <Link to={`/`}>Products</Link>
          <Link to={`/add-product`}>Add product</Link>
        </aside>

        <main>
          <Route exact path="/" component={ProductsList} />
          <Route
            path="/add-product"
            component={AddProduct}
          />
          <Route path="/product/:slug" component={SingleProduct} />
        </main>
      </div>
    </Router>
  )
}

export default App;
