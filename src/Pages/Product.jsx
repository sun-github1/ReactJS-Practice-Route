import React, { useState } from 'react'
import { useNavigate, Link, Navigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    const [goToProduct, setGoToProduct] = useState(() => {
        return false;
    });

    return (
        <div>
            <button
                className='btn btn-primary mb-2'
                onClick={() => {
                    navigate("/product/create");
                }}
            >
                Add Product{" "}
            </button>
            <br />
            <Link to={`/product/details/5`}>
                <button className='btn btn-primary mb-2'>Navigate to Product Detail - 5</button>
            </Link>
            <br />
            {goToProduct && <Navigate to="/product/details/3" />}
            <button
                className='btn btn-primary mb-2'
                onClick={() => {
                    setGoToProduct({ goToProduct: true });
                }}
            >
                Navigate to Product -3 (UseState)
            </button>
        </div>
    )
}

export default Product