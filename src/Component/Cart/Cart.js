import React from 'react';
import Title from '../Title';
import CartColumn from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';


function Cart() {
  return (
    <section>
      <ProductConsumer>
        {
          (value) =>{
            const {cart} = value;
            if(cart.length > 0){
              return(
                <>
                <Title className="py-5" title = "Cart"/>
                <CartColumn/>
                <CartList value ={value}/>
                <CartTotal value ={value}/>
                </>
              )
            }else{
              return(
                <EmptyCart/>
              )
            }
          }
        }
      </ProductConsumer>
     </section>
  );
}

export default Cart;
