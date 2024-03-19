import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductDetail() {
  const { idProduct } = useParams();
  console.log(idProduct);
  const [product, setProduct] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {

        const response = await axios.get(`http://localhost:3010/api/products/${idProduct}`);
        setProduct(response.data.data || null);
        // console.log(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [])

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {!isLoading &&
        <Link to="/products">Volver a Productos</Link>
      }

      <h2>{product.name || <Skeleton />}</h2>
      <p>{product.description_short || <Skeleton count={2} />}</p>
      <p>{product.description_long || <Skeleton count={3} />}</p>
    </div>
  )
}

export default ProductDetail;