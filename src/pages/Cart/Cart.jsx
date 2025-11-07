import React from 'react'
import { CartItems } from '../../components/CartItems/CartItems'

export const Cart = ({cart,updateCart}) => {
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
