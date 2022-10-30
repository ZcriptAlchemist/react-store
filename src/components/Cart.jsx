import React from "react";
import Home from "./Home";

const Cart = (item) => {
  const { image, name, gen, flag, price } = item;
  console.log(image);
  return (
    <div className="cart">
      <p>{image}</p>
      <p>{name}</p>
      <p>{gen}</p>
      <p>{flag}</p>
      <p>{price}</p>
    </div>
  );
};

export default Cart;
