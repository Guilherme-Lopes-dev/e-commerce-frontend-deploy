import React, {useEffect} from 'react'
import './css/Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import EmptyCart from './EmptyCart'
import FilledCart from './FilledCart'
import { addToCart, decreaseCart, removeFromCart, clearCart, getTotals, checkout } from '../features/cartSlice'


const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart])

  return (
    <div className='cart-container'>
      <h2>Carrinho de compras</h2>
      {cart.cartItems.length === 0 ? (<EmptyCart/>) : (<FilledCart/>)}
    </div>
  )
}

export default Cart