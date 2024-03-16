import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ProductCard from "./ProductCard";
import CardSkeleton from "./CardSkeleton";

function ProductsCategory() {
  const { idCat } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3010/api/products/categories/${idCat}?page=${currentPage}&limit=${limit}`
      );
      console.log(response);
      setCategoryName(response.data.message);
      setProducts(response.data.data.products || []);
      setIsLoading(false);
      setTotalPages(Math.ceil(response.data.data.count / limit) || 0)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="container-fluid">
      <h5>{categoryName}</h5>
      <div className="row">
        {isLoading && <CardSkeleton cards={8} />}
        {products.length > 0 &&
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
      <div className='row'>
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Anterior</button>
        <span>Pagina {currentPage} de {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Siguiente</button>
      </div>
    </div>
  );
}

export default ProductsCategory;
