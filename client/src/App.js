import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import CreateProduct from './components/product/CreateProduct';
import Products from './components/product/Products';
import Header from './components/header/Header';
import ShoppingCart from './components/cart/ShoppingCart';
import RegisterPage from './components/user/RegisterPage';

export const ShoppingCartContext = React.createContext();

function App() {
  const cartState = useState([])

  return (
    <div className="App">
      <ShoppingCartContext.Provider value={cartState}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={Products} />
            <Route path="/create-product" component={CreateProduct} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </Router>
      </ShoppingCartContext.Provider>
    </div>
  );
}

export default App;
