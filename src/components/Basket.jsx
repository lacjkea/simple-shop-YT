function Basket(props) {
  function getTotal() {
    let totalPrice = 0;
    props.cart.forEach((item) => {
      totalPrice += item.amount * item.price;
    });
    return totalPrice;
  }
  return (
    <section className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li key={item.id}>
            {item.productdisplayname} x {item.amount},{" "}
            {item.amount * item.price},-
            <button onClick={() => props.removeFromCart(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <h3>Total: {getTotal()},-</h3>
      <button>Buy now</button>
    </section>
  );
}

export default Basket;
