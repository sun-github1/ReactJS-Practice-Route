import React from 'react';
import logo from '../../images/logo.svg'
import {  NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo}
                    style={{ height: '50px' }}
                    alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                            className={({ isActive }) =>
                            isActive ? "nav-link active text-danger" : "nav-link"}
                            aria-current="page" to="/">
                                Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cryptodetail/BTC/10">Crypto Detail</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Product
                            </a>
                            <ul className="dropdown-menu">
                                 <li><NavLink className="dropdown-item" to="/product">Product</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/product/list">Product List</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/product/create">Product Create</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><NavLink className="dropdown-item" to="/product/details">Product Details</NavLink></li>
                            </ul>
                        </li>
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header