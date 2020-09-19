import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar';
import Cart from './Component/Cart/Cart';
import ProductList from './Component/ProductList';
import Details from './Component/Details';
import Look from './Component/Look'
import Modal from './Component/Modal'


function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/yourLook" component={Look}/>
        </Switch>
        <Modal/>
     </React.Fragment>
  );
}

export default App;
