import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "37936299-1969-48e7-a4c1-d615ff40fa76",
    price: 6,
    title: "Ergonomic Linen Shirt",
    description: "Men Pink & White Slim Fit Checked Cotton Linen Casual Shirt",
  },
  {
    id: "408075c3-40b5-4a0e-8637-dac8626f3cb8",
    price: 13,
    title: "Small Leather Gloves",
    description: "Women Blue Textured Summer Riding Gloves",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
