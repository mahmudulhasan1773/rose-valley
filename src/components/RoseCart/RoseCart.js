import React from "react";

const RoseCart = (props) => {
  // console.log(props.roseCart);
  const cart = props.roseCart;
  let totalPrice = 0;
  for (const carts of cart) {
    totalPrice = totalPrice + carts.price;
    console.log(totalPrice);
  }
  return (
    <div>
      <div className="cart-details">Total price : {totalPrice.toFixed(2)}</div>
      <div className="cart-checkout"></div>
    </div>
  );
};

export default RoseCart;
