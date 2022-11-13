import Product from "./Product";

function ProductList(props) {
  return (
    <main className="ProductList">
      {/* <Product /> */}
      {props.products.map((product) => (
        /*      <Product key={product.id} {...product} addToCart={props.addToCart} /> */
        <Product key={product.id} data={product} addToCart={props.addToCart} />
      ))}
    </main>
  );
}

export default ProductList;
