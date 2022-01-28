import './App.css';
import React, { useEffect, useState } from 'react';
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
import LoginPage from './components/user/LoginPage';
import LogoutPage from './components/user/LogoutPage';

export const ShoppingCartContext = React.createContext();
export const UserContext = React.createContext();

function App() {
  const cartState = useState([])
  // const userState = useState({})
  const userState = useState(() => {
    const userInLocalStorage = localStorage.getItem('user')

    return userInLocalStorage ? JSON.parse(userInLocalStorage) : {}

    // if (userInLocalStorage) {
    //   return JSON.parse(userInLocalStorage)
    // } else {
    //   return {}
    // }
  })

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userState[0]))
  }, userState)

  return (
    <div className="App">
      <UserContext.Provider value={userState}>
        <ShoppingCartContext.Provider value={cartState}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" component={Products} />
              {/* <Route path="/create-product" component={CreateProduct} /> */}
              {userState[0].token && (
                <Route path="/create-product" component={CreateProduct} />
              )}
              <Route path="/cart" component={ShoppingCart} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/logout" component={LogoutPage} />
            </Switch>
          </Router>
        </ShoppingCartContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
