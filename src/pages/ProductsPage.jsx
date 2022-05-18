import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import FiltersBlock from "../components/FiltersBlock";
import { clientContext } from "../context/ClientContext";
import ProductCard from "../components/ProductCard";
import MyPagination from "../components/MyPagination";

const ProductsPage = () => {
  const data = useContext(clientContext);
  const { getProducts, products } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <div>
          <FiltersBlock getProducts={getProducts} />
        </div>
        <div className="products-list">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <MyPagination />
      </Container>
    </div>
  );
};

export default ProductsPage;
