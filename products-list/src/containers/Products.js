import React, { useContext } from "react";
// import { ProductsContext } from "../context/products-context"; // approach 1
import ProductItem from "../components/Products/ProductItem";
import { useStore } from "../hooks-store/store";
import "./Products.css";

const Products = (props) => {
  // const productList = useContext(ProductsContext).products; // approach 1
  const state = useStore()[0];
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
