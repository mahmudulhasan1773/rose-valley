import React from "react";
import "./Rose.css";

const Rose = (props) => {
  // console.log(props);
  const { name, img, price, category, seller, stock } = props.rose;
  return (
    <div className="rose-container">
      <div className="rimg">
        <img src={img} alt="rimg" />
      </div>
      <div className="rose-dtails">
        <b>Rose name:{name}</b>
        <h2> price is : {price}</h2>
        <h3> category is : {category}</h3>
        <b> seller :{seller}</b>
        <h2> stock is {stock}</h2>
        <button
          onClick={() => props.handleRoseCart(props.rose)}
          className="add-to-cart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Rose;
