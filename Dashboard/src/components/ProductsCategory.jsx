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

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3010/api/categories/${idCat}`
      );
      setCategoryName(response.data.name);
      setProducts(response.data.products || []);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
    </div>
  );
}

export default ProductsCategory;
