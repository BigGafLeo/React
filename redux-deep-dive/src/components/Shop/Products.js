import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My firstBook",
    description: "This is a first product - amazing!1",
  },
  {
    id: "p2",
    price: 12,
    title: "My secondBook",
    description: "This is a first product - amazing!2",
  },
  {
    id: "p3",
    price: 18,
    title: "My thirdBook",
    description: "This is a first product - amazing!3",
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
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
