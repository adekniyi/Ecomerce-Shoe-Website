import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';



function Footer() {
    return (
        <div className="footer">
        <div className="img-footer">
            <Link to="/">
                <img src={logo} alt="company's logo"
                className="navbar-brand logo"/>
            </Link>
            <Link to="/">
                <p>Lorem ipsum dolor sit.</p>
            </Link>
            <Link to="/">
                <p>amet consectetur adip.</p>
            </Link>
            <Link to="/">
            <p> Repudiandae quia pos.</p>
            </Link>
            <Link to="/">
            <p>voluptas nihil except.</p>
            </Link>
        </div>
        <div className="category">
            <h5>Category</h5>
            <Link to="/">
                <p>Lace Up</p>
            </Link>
            <Link to="/">
                <p>Sneaker</p>
            </Link>
            <Link to="/">
                <p>Flip-Flop</p>
            </Link>
        </div>
        <div className="log">
            <Link to="/">
                <span>F</span>
            </Link>
            <Link to="/">
                <span>T</span>
            </Link>
            <Link to="/">
                <span>In</span>
            </Link>
            <Link to="/">
                <span>Q</span>
            </Link>
        </div>
        </div>
    )
}

export default Footer
