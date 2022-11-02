import React from 'react'
import './css/Cart.css'
import { useSelector} from 'react-redux'
import EmptyCart from './EmptyCart'
import FilledCart from './FilledCart'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  return (
    <div className='cart-container'>
      <h2>Carrinho de compras</h2>
      {cart.cartItems.length === 0 ? (<EmptyCart/>) : (<FilledCart/>)}
    </div>
  )
}

export default Cart