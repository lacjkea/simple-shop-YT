import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <Basket />
    </div>
  );
}

export default App;
