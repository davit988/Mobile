import { CartItems } from "../../components/CartItems/CartItems";
import { Formm } from "../../components/Form/Formm";
export const Cart = () => {

  const cart = JSON.parse(localStorage.getItem('cart'))

  return (
    <div style={{ padding: "25px" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {cart.map((elm) => {
          return <CartItems key={elm.id} elm={elm} />;
        })}
      </ul>
      <Formm />
    </div>
  );
};
