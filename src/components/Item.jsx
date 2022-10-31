import React from "react";
import Cart from "./Cart";

const Item = (item) => {
  //   console.log(item);
  const { image, name, gen, flag, price } = item;
  const addHandler = (image, name, gen, flag, price) => {
    <Cart image={image} name={name} gen={gen} flag={flag} price={price} />;
  };
  return (
    <div className="item">
      <img className="item-image" src={image} alt="product-1" />
      <h2>{name}</h2>
      <p>{gen}</p>
      <p className="flags">{flag}</p>
      <p>{price}</p>
      <button
        onClick={() => addHandler(image, name, gen, flag, price)}
        className="item-btn"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
