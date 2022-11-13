import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  const [products, setProducts] = useState([]);

  //we need to communicate cart to the children
  /*   const [cart, setCart] = useState([
    {
      name: "x",
      price: 1234,
      amount: 2,
    },
  ]); */
  const [cart, setCart] = useState([]);

  function addToCart(data) {
    //Do we have the product
    if (cart.find((entry) => entry.id === data.id)) {
      //we have the product already
      // console.log("it's there");
      setCart((oldCart) =>
        oldCart.map((entry) => {
          if (entry.id !== data.id) {
            return entry;
          }
          const copy = { ...entry };
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    }
    //we don't have it
    else {
      setCart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
    }
    console.log("ATC", data);
  }

  function removeFromCart(id) {
    console.log(`will remove ${id}`);
    //if amount is 1, remove entirely
    //else -1

    // setCart((oldCart) => oldCart);

    //find and modify a product - and filter (we can do that in the same statement - jofh)

    setCart((oldCart) => {
      const subtracted = oldCart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      console.log("subtracted-log", subtracted);
      const filtered = subtracted.filter((item) => item.amount > 0);
      return filtered;
    });
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Basket removeFromCart={removeFromCart} products={products} cart={cart} />
    </div>
  );
}

export default App;
