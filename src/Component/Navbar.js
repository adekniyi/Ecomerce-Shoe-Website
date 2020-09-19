import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'
import ButtonComponent from './Button';


class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-header d-flex justify-content-between">
            <Link to="/">
              <img src={logo} alt="company's logo"
              className="navbar-brand logo"/>
            </Link>
          
            <button type="button" data-toggle ="collapse" data-target ="#navbarToggleExternalContent" className="navbar-toggler"
            aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span> 
            </button>

          </div>
        <div class="pos-f-t">
            <div className ="collapse navbar-collapse" id ="navbarToggleExternalContent">
                  <ul className = "navbar-nav align-items-center">
                        <li className = "nav-item newSlideLeft">
                            <Link to="/" className ="nav-link">
                                Products
                            </Link>
                        </li>
                        <li className = "nav-item newSlideLeft">
                            <Link to="/yourLook" className ="nav-link">
                                Your look
                            </Link>
                        </li>
                        <li className = "nav-item newSlideLeft">
                        <Link to="/cart">
                        <ButtonComponent className="nav-btn">
                          <span className="mr-2">
                          <i className = "fa fa-cart-plus"></i>
                          </span>
                          My cart
                        </ButtonComponent>
                        </Link>
                        </li>
                
                  </ul>
          </div>
      </div>
    </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
.nav-link{
font-size:1.3rem;
text-transfrom: capitalize;
}



`

export default Navbar;
