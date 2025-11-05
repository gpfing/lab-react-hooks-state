import React from "react";

const Cart = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItem.map((item, index) => (
          <li key={index}>{item.name} is in your cart</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
