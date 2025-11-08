import React , {useState,useEffect} from 'react'
import { CartItems } from '../../components/CartItems/CartItems'

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
      <ul>
        {
          cart.map((elm) => {
            return (
              <CartItems key={elm.id} elm={elm} updateCart={updateCart}/>
            )
          })
        }
      </ul>
    </div>
  )
}
