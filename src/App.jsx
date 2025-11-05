import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  const [selectValue, setSelectValue] = useState("all");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };
  const [cartItem, setCartItem] = useState([]);

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
      
      <DarkModeToggle />

      <label>Filter by Category: </label>
      <select value={selectValue} onChange={handleChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        value={selectValue}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
      <Cart cartItem={cartItem} />
    </div>
  );
};

export default App;
