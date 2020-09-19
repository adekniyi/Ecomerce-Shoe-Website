import React from 'react'
import {Link} from 'react-router-dom';



function CartTotal(props) {
    const{subTotal,cartTax,cartTotal,clearCart} = props.value
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right mb-5">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                            onClick = {() =>clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span>subtotal : </span>
                            <strong>${subTotal}</strong>
                        </h5>
                        <h5>
                            <span>Tax: </span>
                            <strong>${cartTax}</strong>
                        </h5>
                        <h5>
                            <span>Total : </span>
                            <strong>${cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTotal
