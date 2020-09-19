import React,{useState} from 'react';
import '../App.css';
import ProductItem from './ProductItem';
import Title from './Title';
import {ProductConsumer} from '../Context';
import Header from './Header';


function ProductList() {

  return (
   
        <>
      <Header/>
        <div className="py-5"> 
        <div className = "container"> 
        <Title title = "products"/>
        <div className="row">
          <ProductConsumer>
              {
                (value) => 
                {
                 return value.product.map((product) =>
                  {
                    return <ProductItem key ={product.id} product = {product}/>
                  }
                 )
                }
              }
          </ProductConsumer>
        </div>
        </div>
        </div>
        </>

       
  );
}

export default ProductList;
