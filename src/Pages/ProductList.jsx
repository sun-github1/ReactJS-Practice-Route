import React from 'react'
import { useNavigate, Link, Navigate } from "react-router-dom";

const ProductList = () => {
    const navigate = useNavigate();
    return (
        <div>
            ProductList{" "}
            <button
            className='btn btn-primary'
                onClick={() => {
                    navigate("/product/create");
                }}
            >
                Add Product{" "}
            </button>
        </div>
    )
}

export default ProductList