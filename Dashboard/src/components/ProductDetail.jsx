import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import TopBar from './TopBar';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductDetail({user,setDisplay, display}) {
  const { idProduct } = useParams();
  console.log(idProduct);
  const [product, setProduct] = useState({});
  const [colors, setColors] = useState([])

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {

        const response = await axios.get(`http://localhost:3010/api/products/${idProduct}`);
        setProduct(response.data.data || null);
        setColors(response.data.data.colors)
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [])

  return (
    <div>
      <TopBar user ={user} setDisplay={setDisplay} display={display}/>
      {isLoading && <p>Loading...</p>}

      
      <div className='p-2 mx-4'>
      <h2>{product.name || <Skeleton />}</h2>
      <img
            className="img-fluid px-3 mt-3 mb-4"
            src={product.image}
            alt={product.name}
            style={{ objectFit: 'cover' }}
          />
          <p>${product.final_price || <Skeleton count={2} />}</p>
      <p>{product.description_short || <Skeleton count={2} />}</p>
      <p>{product.description_long || <Skeleton count={3} />}</p>
<ul>
      {colors.map((color,i)=>{
        return (<li key={i}>{color.name}</li>)
      })}
      </ul>
      <div className='d-flex flex-row'>
      <Link to={`/products/${product.id}/update`} className="btn btn-info m-1" rel="nofollow" href="/">Editar</Link>
      <Link  className="btn btn-info m-1" rel="nofollow" href="/">Eliminar</Link>
    </div>
    </div>
    <br />
    {!isLoading &&
        <Link className='linkColor' to="/products">Volver a Productos</Link>
      }
    </div>
  )
}

export default ProductDetail;