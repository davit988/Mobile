import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Cart } from "../pages/Cart/Cart";
import { Product } from "../pages/Product/Product";

import "./Style/App.css";

export const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const cartLength = cart.length

  console.log(cart);
  let bool = false;

  const addToCart = (item) => {

    cart.forEach((elm) => {

      if (elm.id === item.id) {

        bool = true;

        setCart(
          cart.map((c) => {
            if (c.id === item.id) {

              return {
                ...c,
                count: ++c.count,
                initPrice: c.count * c.price,
              };
            }
            else{
              return c
            }
          })

        );
      }
    });
    if(!bool){
       setCart((prev) => {
        return [...prev,item]
       })
    }

    
  };

  const updateCart = (count,id) =>{
    setCart(cart.map((c) => {
          if(cart.id === id){
          return{
            ...c,
            count : count,
            initPrice : count * c.price
          }
        }else{
          return c 
        }
        }))
       
  }

  useEffect(() => {
    instance
      .get("/products")
      .then((res) =>
        setProducts(
          res.data.map((ele) => ({ ...ele, count: 1, initPrice: ele.price }))
        )
      );
  }, []);

  console.log(products);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout cartLength={cartLength} />}>
          <Route index element={<Home products={products} />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} products={products} />}
          />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/carts" element={<Cart cart={cart} updateCart={updateCart}/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
