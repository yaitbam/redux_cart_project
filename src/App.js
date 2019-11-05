import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

//Pages
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import CartIcon from './components/CartIcon';



function App() {
  return (
    <Router>
    <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">CartStore</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>
            </ul>
        
          </div>
          <CartIcon />
        </nav>
        <Route path="/" component={Home} exact /> 
        <Route path="/products" component={Products}/> 
        <Route path="/cart" component={Cart} /> 
        <Route path="/product/:id" component={ProductDetails} /> 
    </div>
    </Router>
  );
}

function AppWithStore(){
  return <Provider store ={store}>
    <App />
  </Provider>
}

export default AppWithStore;
