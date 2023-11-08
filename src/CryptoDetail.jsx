import React from 'react'
import { useParams } from 'react-router-dom'

const CryptoDetail = () => {
    const { cryptoSymbol, id } =useParams();
  return (
    <div>CryptoDetail for {cryptoSymbol} 
    id: {id}</div>
  )
}

export default CryptoDetail