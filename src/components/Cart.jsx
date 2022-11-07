import React, { useState } from "react";
import "../App.css";
import itemsData from "../util/itemsData";
import Item from "./Item";
import addedItems from "../util/cartItems";

const Cart = () => {
	// console.log(addedItems);
	const [isLoad, setIsLoad] = useState(false);
	const plusCounter = (index) => {
		cartItems[index]["count"] = cartItems[index]["count"] + 1;
		setIsLoad(!isLoad);
	};

	const minusCounter = (index) => {
		if (cartItems[index]["count"] <= 1) {
			cartItems[index]["count"] = 1;
		} else {
			cartItems[index]["count"] = cartItems[index]["count"] - 1;
		}
		setIsLoad(!isLoad);
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
				{cartItems.map((item, index) => {
					const { image, name, gen, flag, price, count } = item;
					return (
						<div className="cart-item">
							<img className="cart-item-img" src={image} alt={`${name}-img`} />
							<div className="cart-item-details">
								<h2>{name}</h2>
								<p>{gen}</p>
								<p className="flags">{flag}</p>
								<p>{price}</p>
								<div className="quantity-setting">
									<button
										onClick={() => plusCounter(index)}
										className="plus-btn"
									>
										+
									</button>
									<p className="count">{count}</p>
									<button
										onClick={() => minusCounter(index)}
										className="minus-btn"
									>
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
