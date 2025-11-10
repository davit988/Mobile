import React , {useState,useEffect} from 'react'
import { CartItems } from '../../components/CartItems/CartItems'
import {  Formm } from '../../components/Form/Formm';


export const Cart = ({updateCart}) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const value =  localStorage.getItem('cart')
     if (value) {
          setCart(JSON.parse(value)); // Update state if value found
        }
  },[])

  return (
    <div>
      <ul style={{display :"flex", justifyContent:"space-between", flexDirection:"column", gap :"25px"}}>
        {
          cart.map((elm) => {
            return (
              <CartItems key={elm.id} elm={elm} updateCart={updateCart}/>
            )
          })
        }
      </ul>
      <Formm/>
    </div>
  )
}
