import React from 'react'
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
    const navigate = useNavigate();
    return (
        <div>
            CreateProduct
            <button
                className='btn btn-primary'
                onClick={() => {
                    navigate(-1);
                }}
            >
                Go back
            </button>
        </div>
    )
}

export default CreateProduct