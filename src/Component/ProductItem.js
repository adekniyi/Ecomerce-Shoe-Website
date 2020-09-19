import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import styled from 'styled-components';
import PropTypes from 'prop-types';


//


function ProductItem(props) {
  const{id,img,title,inCart,price} = props.product;

   return (
    <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3 containerImg" >
        <div className="card">
        <ProductConsumer>
          {(value) => (
              <div className="img-container p-3">
              <img src={img} alt="product" className="card-img-top"/>
              <button className="cart-btn" disabled={inCart?true:false} 
              onClick ={()=>
                {
                  value.addToCart(id);
                  value.openModal(id);
                }}>
                {inCart?(<p className="text-capitalize mb-0" disabled>{" "}in cart</p>)
                :(<i className = "fa fa-cart-plus"></i>)}
              </button>
            </div>
          )}
        </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
              <p className="align-item-center mb-0">{title}</p>
              <h5 className="font-italic mb-0">
                <span className="mr-1">$</span>
                {price}
              </h5>
          </div>
        </div>
     </ProductWrapper>
  );
}

ProductItem.propType = {
ProductItem:PropTypes.shape({
  id:PropTypes.number,
  img:PropTypes.string,
  price:PropTypes.number,
  title:PropTypes.string,
  inCArt:PropTypes.bool,
}).isRequired
};


const ProductWrapper = styled.div`
.card {
  border-color: transparent;
  transition:all 1s linear;
}
.card-footer{
  background:transparent;
  border-top:transparent;
  transition:all 1s linear;
}

&:hover{
  .card{
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
  }
  .card-footer{
    background: rgba(247,247,247)
  }
}
.img-container{
  position:relative;
  overflow:hidden;
}
.card-img-top{
  transition:all 1s linear;
}
.img-container:hover .card-img-top{
transform:scale(1.14)
}
.cart-btn{
  position:absolute;
  bottom:0;
  right:0;
  padding:0.2rem 0.4rem;
  border:none;
  font-size:1.4rem;
  border-radius:0.5rem 0 0 0;
  transform:translate(100%,100%);
  transition:all 1s linear;
}
.img-container:hover .cart-btn{
  transform:translate(0,0);
}
`

export default ProductItem;
