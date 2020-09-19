import React from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../Context';
import ButtonComponent from './Button';
import {Link} from 'react-router-dom';

function Modal() {
    return (
        <div>
            <ProductConsumer>
                {
                    (value)=>
                        {
                            const {modalOpen,closeModal} = value;
                            const {img,id,title,price} = value.modalProduct;
                            
                            if(!modalOpen)
                            {
                                return null;
                            }
                            else{
                                return(
                                    <ModalContainer>
                                      <div className="container">
                                          <div className="row">
                                              <div id="modal" 
                                              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                                  <h5>item added to cart</h5>
                                                  <img src={img} alt="product" className="img-fluid"/>
                                                  <h5>{title}</h5>
                                                    <h5 className="text-muted">
                                                       price : $ {price}
                                                    </h5>
                                                    <Link to="/">
                                                        <ButtonComponent onClick = {()=> closeModal()}>
                                                            continue shopping
                                                        </ButtonComponent>
                                                    </Link>
                                                    <br/>
                                                    <Link to="/cart">
                                                        <ButtonComponent className="mt-2" onClick = {()=> closeModal()}>
                                                            go to cart
                                                        </ButtonComponent>
                                                    </Link>
                                              </div>
                                          </div>
                                    </div>                              
                                  </ModalContainer>
                                )
                             
                            }
                        }
                }
            </ProductConsumer>
        </div>
    )
}
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
background: rgba(0,0,0,0.2);
display:flex;
align-items:center;
justify-content:center;
#modal{
background:white
}
`

export default Modal
