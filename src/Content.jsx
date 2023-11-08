import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import ProductList from './Pages/ProductList';
import CreateProduct from './Pages/CreateProduct';
import { NotFound } from './NotFound';
import CryptoDetail from './CryptoDetail';

const Content = () => {
    return (
        <div className="container" style={{ minHeight: "85vh" }}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/cryptodetail/:cryptoSymbol/:id" element={<CryptoDetail />}></Route>
                <Route path="product">
                    <Route path="" element={<Product />}></Route>
                    <Route path="details/:id" element={<ProductDetails />}></Route>
                    <Route path="list" element={<ProductList />}></Route>
                    <Route path="create" element={<CreateProduct />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}

export default Content