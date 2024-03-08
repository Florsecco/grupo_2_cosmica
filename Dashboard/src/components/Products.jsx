import React, { useState, useEffect, useRef } from 'react';

import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';


function Products() {
  console.log('entre al componente');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('entre al fetch');
        const response = await axios.get('http://localhost:3010/api/products');
        console.log(response.data.data);
        setProducts(response.data.data);
      } catch (error) {

      }
    }
    console.log('entre al useEffect');
    fetchProducts();
  }, []);


  return (
    <div className="container-fluid">
      <div className="row">
        {
          products.length > 0 && products.map(product => {
            return (

              <div className="col-sm-6 col-md-3 my-4" key={product.id}>
                <div className="card shadow mb-4">
                  <Link className="nav-link" to={{ pathname: `products/${product.id}`, state: { product } }}>
                    <div className="card-header py-3">
                      <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                    </div>
                  </Link>
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                        src={`http://localhost:3010/img/products/${product.image}`}
                        alt={product.name}
                        style={{ width: '90%', height: '400px', objectFit: 'cover' }}
                      />
                    </div>
                    <p>{product.description_short}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Products;