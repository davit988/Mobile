import React, { useState, } from "react";

export const CartItems = ({ elm, updateCart }) => {
  let [count, setCount] = useState(elm.count);

  const plus = () => {
    setCount(++count);
    updateCart(count, elm.id);
  };

  const minus = () => {
    if (count > 1) {
      setCount(--count);
      updateCart(count, elm.id);
    }
  };

  return (
    <>
      <li
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img src={elm.image} width={"80px"} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <button onClick={minus} style={{ width: "25px", height: "25px" }}>
            -
          </button>
          <span>{count}</span>
          <button onClick={plus} style={{ width: "25px", height: "25px" }}>
            +
          </button>
        </div>
        <div>
          <h5>${elm.initPrice.toFixed(3)}</h5>
        </div>
      </li>
      <hr />
    </>
  );
};
