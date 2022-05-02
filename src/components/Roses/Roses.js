import React, { useEffect, useState } from "react";
import Rose from "../Rose/Rose";
import RoseCart from "../RoseCart/RoseCart";
import "./Roses.css";
const Roses = () => {
  const [roses, setRoses] = useState([]);
  const [roseCart, setRoseCart] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setRoses(data));
  }, []);

  const handleRoseCart = (rose) => {
    const newRoseCart = [...roseCart, rose];
    setRoseCart(newRoseCart);
    console.log(roseCart);
  };
  return (
    <div className="roses">
      <div className="rose-shop">
        {roses.map((rose) => (
          <Rose
            handleRoseCart={handleRoseCart}
            key={rose.key}
            rose={rose}
          ></Rose>
        ))}
      </div>
      <div className="rose-cart">
        <RoseCart roseCart={roseCart}></RoseCart>
      </div>
    </div>
  );
};

export default Roses;
