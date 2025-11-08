import React, { useState, useEffect, useRef } from "react";

export const CartItems = ({ elm, updateCart }) => {

  

  

  
  let [count, setCount] = useState(elm.count);

  const plus = () => {
    setCount(++count);
    updateCart(count);
  };
  const minus = () => {
    if (count > 1) {
      setCount(--count);
      updateCart(count, elm.id);
    }
  };

  return (
    <li>
      <div>
        <img src={elm.image} width={"80px"} />
      </div>
      <div>
        <button onClick={minus}>-</button>
        <span>{count}</span>
        <button onClick={plus}>+</button>
      </div>
      <div>
        <h5>{elm.initPrice.toFixed(3)}</h5>
      </div>
    </li>
  );
};
