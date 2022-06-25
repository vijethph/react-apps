import React from "react";
// import { ProductsContext } from "../context/products-context"; // approach 1
import Card from "../UI/Card";
import { useStore } from "../../hooks-store/store";
import "./ProductItem.css";

const ProductItem = React.memo((props) => {
  /// const toggleFav = useContext(ProductsContext).toggleFav; // approach 1
  console.log("RENDERING");
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // toggleFav(props.id); // approach 1
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
