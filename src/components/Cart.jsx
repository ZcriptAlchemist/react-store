import React, { useState } from "react";
import "../App.css";
import itemsData from "../util/itemsData";
import Item from "./Item";
import addedItems from "../util/cartItems";

const Cart = () => {
  // console.log(addedItems);
  const [count, setCount] = useState(1);
  const plusCounter = () => {
    setCount(count + 1);
  };

  const minusCounter = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const uniqueIDs = [];

  const cartItems = addedItems.filter((item) => {
    const isDuplicate = uniqueIDs.includes(item.name);

    if (!isDuplicate) {
      uniqueIDs.push(item.name);
      return true;
    }

    return false;
  });

  // console.log(cartItems);

  if (cartItems.length === 0) {
    return <h2 className="no-items">No items added</h2>;
  } else {
    return (
      <div className="cart-div">
        {cartItems.map((item) => {
          const { image, name, gen, flag, price } = item;
          return (
            <div className="cart-item">
              <img className="cart-item-img" src={image} alt={`${name}-img`} />
              <div className="cart-item-details">
                <h2>{name}</h2>
                <p>{gen}</p>
                <p className="flags">{flag}</p>
                <p>{price}</p>
                <div className="quantity-setting">
                  <button onClick={() => plusCounter()} className="plus-btn">
                    +
                  </button>
                  <p className="count">{count}</p>
                  <button onClick={() => minusCounter()} className="minus-btn">
                    -
                  </button>
                </div>
                <button
                  // onClick={}
                  className="remove-btn"
                >
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Cart;
