import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const Navbar = (props) => {
    const totalquantity = props.cart.reduce((total, value) => {
        return total += value.qty
    }, 0)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-success fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">BookStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/" className="dropdown-item">Action</Link></li>
                                    <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                    <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className='navbar-nav ms-auto'>
                            <li> <Link  className="nav-link text-light" to="/signup"><FontAwesomeIcon icon={faUser} /></Link></li>
                            <li className='position-relative'> <Link className="nav-link text-light" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /><span className='total'>{totalquantity}</span></Link></li>
                            <li> <Link to="/" className="nav-link text-light"><FontAwesomeIcon icon={faHeart} /></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}
export default connect(mapStatetoProps)(Navbar)